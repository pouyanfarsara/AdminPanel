import { products } from "@/app/lib/dashboardData";

export async function GET() {
  return Response.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.name.trim()) {
    return Response.json(
      { message: "Product name is required" },
      { status: 400 },
    );
  }

  if (!body.description || !body.description.trim()) {
    return Response.json(
      { message: "Description is required" },
      { status: 400 },
    );
  }

  if (!body.sku || !body.sku.trim()) {
    return Response.json({ message: "SKU is required" }, { status: 400 });
  }

  const newProduct = {
    id: Date.now(),
    name: body.name,
    category: body.category || "Accessories",
    sku: body.sku,
    price: 0,
    stock: 0,
    status: "In Stock" as const,
    icon: null,
  };

  products.push(newProduct);

  return Response.json(newProduct, { status: 201 });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  products.splice(productIndex, 1);

  return Response.json({ message: "Product deleted successfully" });
}

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));

  const body = await request.json();

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex === -1) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }

  if (!body.name || !body.name.trim()) {
    return Response.json(
      { message: "Product name is required" },
      { status: 400 },
    );
  }

  if (!body.sku || !body.sku.trim()) {
    return Response.json({ message: "SKU is required" }, { status: 400 });
  }

  products[productIndex] = {
    ...products[productIndex],
    name: body.name,

    category: body.category,
    sku: body.sku,
  };

  return Response.json(products[productIndex]);
}
