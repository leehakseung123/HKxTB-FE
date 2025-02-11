const ProductCard = ({ title, price, description, category }) => {
  return (
    <div className="flex flex-col bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-blue-600 font-bold">{price}</p>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full">{category}</span>
        <button className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition">장바구니 담기</button>
      </div>
    </div>
  );
};

export default ProductCard;
