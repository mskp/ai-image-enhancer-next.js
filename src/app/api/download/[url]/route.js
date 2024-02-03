import axios from "axios";

export async function GET(req, { params }) {
    try {
        const url = params.url;
        const response = await axios.get(url, { responseType: "arraybuffer" });
        const res = new Response(response.data);
        res.headers.set("Content-Type", "application/octet-stream");
        res.headers.set(
            "Content-Disposition",
            `attachment; filename="img_enhanced_${Date.now()}.png"`
        );
        return res;
    } catch (error) {
        console.log(error)
        return Response.json({ message: error.message }, { status: 500 });
    }
}