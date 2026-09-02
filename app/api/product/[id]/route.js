
import connectDB from '@/config/db'
import authSeller from '@/lib/authSeller'
import Product from '@/models/Product'
import { getAuth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function DELETE(request, { params }) {
    try {
        const { userId } = getAuth(request)

        const isSeller = authSeller(userId)

        if (!isSeller) {
            return NextResponse.json({
                success: false,
                message: 'Not authorized'
            })
        }

        await connectDB()

        const { id } = await params

        const product = await Product.findOne({
            _id: id,
            userId: userId
        })

        if (!product) {
            return NextResponse.json({
                success: false,
                message: 'Product not found'
            })
        }

        await Product.findByIdAndDelete(id)

        return NextResponse.json({
            success: true,
            message: 'Product removed successfully'
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}
