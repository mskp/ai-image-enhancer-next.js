import processImage from "@/utils";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const image = formData.get("image")
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes)
        const processedImage = await processImage(buffer);

        return Response.json({
            processedImage
        })
    } catch (error) {
        return Response.json({ message: error.message }, { status: 500 });
    }
}