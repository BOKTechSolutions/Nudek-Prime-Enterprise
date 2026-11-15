
import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    // Guest customers can browse and order through WhatsApp.
    // This endpoint retrieves saved carts only for signed-in users.
    if (!userId) {
      return NextResponse.json({
        success: true,
        cartItems: {},
      });
    }

    await connectDB();

    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({
        success: true,
        cartItems: {},
      });
    }

    return NextResponse.json({
      success: true,
      cartItems: user.cartItems || {},
    });
  } catch (error) {
    console.error("Error fetching cart:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve cart.",
      },
      { status: 500 }
    );
  }
}
