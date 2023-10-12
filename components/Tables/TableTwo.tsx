import Image from "next/image";
import { Product } from "@/types/product";

const productData: Product[] = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/images/product/product-02.png",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/images/product/product-03.png",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/images/product/product-04.png",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

const TableTwo = () => {
  return (
    <div className="bg-white dark:bg-boxdark p-4">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
      </div>

      <div className="grid grid-cols-6 rounded-md bg-meta-9 dark:bg-black border-stroke py-2.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-bold text-xs dark:text-whiten">NAME</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-bold text-xs dark:text-whiten">ROLE</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-bold text-xs dark:text-whiten">PRICE</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-bold text-xs dark:text-whiten">SOLD</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-bold text-xs dark:text-whiten">Profit</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex-shrink-0">
                <Image src={product.image} alt="Brand" width={48} height={48} />
              </div>
              <p className="text-sm font-semibold text-black dark:text-white">
                {product.name}
                <br />
                <p className="text-xs font-semibold text-bodydark2">Description</p>
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm font-semibold text-black dark:text-white">
              {product.category}
              <br />
              <p className="text-xs font-semibold text-bodydark2">Description</p>
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm font-semibold text-black dark:text-white">
              ${product.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black font-semibold dark:text-white">{product.sold}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm font-semibold text-meta-3">${product.profit}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
