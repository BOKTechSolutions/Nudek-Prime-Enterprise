
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { inngest } from "@/config/inngest";

export async function POST(req) {
  try {
    // Verify that the request genuinely came from Clerk
    const evt = await verifyWebhook(req);

    console.log("Clerk webhook received:", evt.type);

    // Only process the user events we need
    const supportedEvents = [
      "user.created",
      "user.updated",
      "user.deleted",
    ];

    if (!supportedEvents.includes(evt.type)) {
      return Response.json({
        success: true,
        message: "Event ignored",
      });
    }

    // Forward the verified Clerk event to Inngest
    await inngest.send({
      name: `clerk/${evt.type}`,
      data: evt.data,
    });

    console.log("Event successfully sent to Inngest:", evt.type);

    return Response.json({
      success: true,
      message: "Webhook processed successfully",
    });

  } catch (error) {
    console.error("Clerk webhook error:", error);

    return Response.json(
      {
        success: false,
        message: "Webhook processing failed",
      },
      { status: 400 }
    );
  }
}
