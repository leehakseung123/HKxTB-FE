import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    { title: "프리미엄 노트북", price: "1,599,000원", description: "최신 사양의 고성능 노트북", category: "전자기기" },
    { title: "무선 헤드폰", price: "299,000원", description: "프리미엄 사운드의 노이즈 캔슬링 헤드폰", category: "전자기기" },
    { title: "스마트 워치", price: "399,000원", description: "피트니스 트래킹과 스마트폰 연결 기능", category: "전자기기" },
  ];

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">추천 제품</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </main>
  );
};

export default ProductList;
