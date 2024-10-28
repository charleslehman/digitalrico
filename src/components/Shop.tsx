import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Card } from './ui/Card';
import Button from './ui/Button';

const products = [
  {
    id: 1,
    name: "Digital Art Print",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1561998338-13ad7883b20f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Designer T-Shirt",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Art Poster",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Shop() {
  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of digital art prints and merchandise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id}>
              <Card.Image
                src={product.image}
                alt={product.name}
              />
              <Card.Content>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-[#8A9A5B] font-bold">${product.price}</span>
                  <Button className="px-4 py-2">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}