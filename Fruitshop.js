import React, { useMemo, useState } from 'react';


export default function FruitShopWebsite() {
  const [fruits, setFruits] = useState([
  {
    name: 'Fresh Apples',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Sweet Mangoes',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Juicy Oranges',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Organic Strawberries',
    price: 320,
    image:
      'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Fresh Bananas',
    price: 60,
    image:
      'https://images.unsplash.com/photo-1574226516831-e1dff420e37f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Green Grapes',
    price: 140,
    image:
      'https://images.unsplash.com/photo-1537640538966-79f369143f8f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Fresh Pineapple',
    price: 90,
    image:
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Watermelon',
    price: 70,
    image:
      'https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Kiwi',
    price: 260,
    image:
      'https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Papaya',
    price: 85,
    image:
      'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Dragon Fruit',
    price: 340,
    image:
      'https://images.unsplash.com/photo-1596591606875-7f6cfcf4f5ea?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Pomegranate',
    price: 210,
    image:
      'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Guava',
    price: 110,
    image:
      'https://images.unsplash.com/photo-1596591868231-05e17f0c8d8a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Litchi',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1627053963249-4c7c0aaf6458?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Pears',
    price: 190,
    image:
      'https://images.unsplash.com/photo-1574226516831-e1dff420e12f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Blueberries',
    price: 420,
    image:
      'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Coconut',
    price: 55,
    image:
      'https://images.unsplash.com/photo-1519096845289-95806ee03a1a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Cherry',
    price: 480,
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Avocado',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Muskmelon',
    price: 95,
    image:
      'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Black Grapes',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Plums',
    price: 240,
    image:
      'https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=1200&auto=format&fit=crop',
  },
]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [address, setAddress] = useState('');
  const [upiId, setUpiId] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [darkMode, setDarkMode] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');
  const [newFruitName, setNewFruitName] = useState('');
  const [newFruitPrice, setNewFruitPrice] = useState('');
  const [newFruitImage, setNewFruitImage] = useState('');
  const [users, setUsers] = useState([
  {
    name: 'Rahul Sharma',
    email: 'rahul@gmail.com',
    time: '10:30 AM',
  },
  {
    name: 'Priya Patel',
    email: 'priya@gmail.com',
    time: '11:15 AM',
  },
]);

  const adminOrders = [
    {
      id: '#ORD1001',
      customer: 'Rahul Sharma',
      amount: 780,
      status: 'Completed',
      payment: 'Received',
    },
    {
      id: '#ORD1002',
      customer: 'Priya Patel',
      amount: 450,
      status: 'Pending',
      payment: 'Pending',
    },
    {
      id: '#ORD1003',
      customer: 'Amit Verma',
      amount: 920,
      status: 'Completed',
      payment: 'Received',
    },
    {
      id: '#ORD1004',
      customer: 'Sneha Joshi',
      amount: 350,
      status: 'Preparing',
      payment: 'Received',
    },
  ];

  const totalRevenue = adminOrders
    .filter((order) => order.payment === 'Received')
    .reduce((sum, order) => sum + order.amount, 0);

  const completedOrders = adminOrders.filter(
    (order) => order.status === 'Completed'
  ).length;

  const pendingOrders = adminOrders.filter(
    (order) => order.status !== 'Completed'
  ).length;

  const addToCart = (fruit) => {
    if (!loggedIn) {
      alert('Please login first to add items into cart');
      return;
    }

    const existingItem = cart.find((item) => item.name === fruit.name);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === fruit.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...fruit, quantity: 1 }]);
    }

    setShowCart(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const increaseQuantity = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    setCart(updated);
  };

  const decreaseQuantity = (index) => {
    const updated = [...cart];

    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
      setCart(updated);
    } else {
      removeFromCart(index);
    }
  };

  const toggleWishlist = (fruitName) => {
    if (wishlist.includes(fruitName)) {
      setWishlist(wishlist.filter((item) => item !== fruitName));
    } else {
      setWishlist([...wishlist, fruitName]);
    }
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const categories = ['All', 'Organic', 'Seasonal', 'Imported'];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogin = () => {
    if (user.trim() && password.trim()) {
      setLoggedIn(true);
      alert(`Welcome ${user}! Login successful.`);
    } else {
      alert('Please enter username and password');
    }
  };

  const handleAdminLogin = () => {
    if (
      adminUsername === 'admin' &&
      adminPassword === 'admin123'
    ) {
      setAdminMode(true);
      setShowAdmin(true);
    } else {
      alert('Invalid admin credentials');
    }
  };

  if (adminMode && showAdmin) {
    return (
  <>
    {/* Product Management */}
    <div className="bg-white rounded-[30px] p-8 shadow-xl mb-10">

      <h2 className="text-3xl font-black text-orange-600 mb-8">
        Product Management
      </h2>

      <div className="space-y-6">

        {fruits.map((fruit, index) => (

          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b pb-6"
          >

            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-24 h-24 rounded-2xl object-cover"
            />

            <input
              type="text"
              value={fruit.name}
              className="border px-4 py-3 rounded-2xl"
              onChange={(e) => {
                const updated = [...fruits];
                updated[index].name = e.target.value;
                setFruits(updated);
              }}
            />

            <input
              type="number"
              value={fruit.price}
              className="border px-4 py-3 rounded-2xl"
              onChange={(e) => {
                const updated = [...fruits];
                updated[index].price = Number(e.target.value);
                setFruits(updated);
              }}
            />

            <input
              type="text"
              value={fruit.image}
              className="border px-4 py-3 rounded-2xl"
              onChange={(e) => {
                const updated = [...fruits];
                updated[index].image = e.target.value;
                setFruits(updated);
              }}
            />

            <button
              onClick={() => {
                setFruits(
                  fruits.filter((_, i) => i !== index)
                );
              }}
              className="bg-red-500 text-white px-5 py-3 rounded-2xl font-bold"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">

        <input
          type="text"
          placeholder="Fruit Name"
          value={newFruitName}
          onChange={(e) => setNewFruitName(e.target.value)}
          className="border px-4 py-3 rounded-2xl"
        />

        <input
          type="number"
          placeholder="Price"
          value={newFruitPrice}
          onChange={(e) => setNewFruitPrice(e.target.value)}
          className="border px-4 py-3 rounded-2xl"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={newFruitImage}
          onChange={(e) => setNewFruitImage(e.target.value)}
          className="border px-4 py-3 rounded-2xl"
        />

        <button
          onClick={() => {

            if (
              newFruitName &&
              newFruitPrice &&
              newFruitImage
            ) {

              setFruits([
                ...fruits,
                {
                  name: newFruitName,
                  price: Number(newFruitPrice),
                  image: newFruitImage,
                },
              ]);

              setNewFruitName('');
              setNewFruitPrice('');
              setNewFruitImage('');
            }
          }}
          className="bg-green-500 text-white rounded-2xl font-bold"
        >
          Add Fruit
        </button>

      </div>

    </div>

    {/* User Login Details */}
    <div className="bg-white rounded-[30px] p-8 shadow-xl mb-10">

      <h2 className="text-3xl font-black text-blue-600 mb-6">
        User Login Details
      </h2>

      <table className="w-full">

        <thead>
          <tr className="border-b">
            <th className="py-3 text-left">Name</th>
            <th className="text-left">Email</th>
            <th className="text-left">Login Time</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user, index) => (

            <tr key={index} className="border-b">

              <td className="py-4">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.time}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  </>
);  
  }

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    if (!address.trim()) {
      alert('Please enter delivery address');
      return;
    }

    if (!upiId.trim()) {
      alert('Please enter your UPI ID');
      return;
    }

    setPaymentDone(true);
    setOrderStatus('Order Confirmed');

    setTimeout(() => setOrderStatus('Preparing'), 3000);
    setTimeout(() => setOrderStatus('Out for Delivery'), 6000);
    setTimeout(() => setOrderStatus('Delivered'), 9000);

    alert(
      `Payment Successful!

Order placed successfully for ${user}

Delivery Address:
${address}

Total Paid: ₹${totalPrice}
Paid Using UPI: ${upiId}`
    );

    setCart([]);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-[40px] p-10 w-full max-w-md">
          <div className="text-center">
            <h1 className="text-5xl font-black text-orange-600">
              Fruitopia 🍉
            </h1>
            <p className="mt-4 text-gray-500 text-lg">
              Login to continue shopping fresh fruits
            </p>
          </div>

          <div className="mt-10 space-y-5">
            <input
              type="text"
              placeholder="Enter username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-orange-300 outline-none focus:ring-4 focus:ring-orange-200"
            />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-4 rounded-2xl border border-orange-300 outline-none focus:ring-4 focus:ring-orange-200"
            />

            <button
              onClick={handleLogin}
              className="w-full py-4 bg-orange-500 text-white rounded-2xl text-xl font-bold hover:bg-orange-600 hover:scale-105 transition duration-300"
            >
              Login
            </button>
          </div>

          <div className="mt-8 text-center text-gray-500">
            Fresh • Organic • Fast Delivery 🚚
          </div>

          <div className="mt-8 border-t pt-6">
            <h3 className="text-center text-xl font-bold text-purple-600 mb-4">
              Admin Login
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Admin username"
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-purple-300 outline-none"
              />

              <input
                type="password"
                placeholder="Admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full px-5 py-4 rounded-2xl border border-purple-300 outline-none"
              />

              <button
                onClick={handleAdminLogin}
                className="w-full py-4 bg-purple-600 text-white rounded-2xl text-lg font-bold hover:bg-purple-700"
              >
                Login as Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className={`${darkMode ? 'bg-gray-950 text-white' : 'bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 text-gray-800'} min-h-screen overflow-hidden transition duration-500`}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 backdrop-blur-md bg-white/70 shadow-sm sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-orange-600 tracking-wide">
          Fruitopia
        </h1>

        <div className="flex items-center gap-6 text-lg font-medium">
          <a href="#home" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="#shop" className="hover:text-orange-500 transition">
            Shop
          </a>
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-orange-100 px-4 py-2 rounded-xl text-orange-700 font-bold hover:bg-orange-200"
          >
            🛒 {cart.length}
          </button>

          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
            Welcome, {user}
          </div>

          <button
            onClick={() => {
              setLoggedIn(false);
              setCart([]);
              setShowCart(false);
              setAddress('');
              setUpiId('');
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-20"
      >
        <div className="max-w-xl z-10 animate-[fadeIn_1s_ease-in-out]">
          <h2 className="text-5xl lg:text-7xl font-black leading-tight text-orange-600">
            Fresh Fruits
            <span className="block text-green-600">Delivered Daily</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Taste the freshness of hand-picked organic fruits directly from local farms.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 bg-orange-500 text-white rounded-2xl shadow-lg hover:scale-105 hover:bg-orange-600 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative mt-16 lg:mt-0 flex items-center justify-center">
          <div className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>

          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=1200&auto=format&fit=crop"
            alt="Fruit Basket"
            className="relative w-[350px] lg:w-[500px] rounded-[40px] shadow-2xl animate-bounce"
          />
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 lg:px-20 py-12">
        {[
          {
            title: '100% Organic',
            emoji: '🍎',
            text: 'Naturally grown fruits without harmful chemicals.',
          },
          {
            title: 'Fast Delivery',
            emoji: '🚚',
            text: 'Get fresh fruits delivered to your doorstep quickly.',
          },
          {
            title: 'Best Quality',
            emoji: '🥭',
            text: 'Premium hand-selected fruits for maximum freshness.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition duration-300"
          >
            <div className="text-5xl">{feature.emoji}</div>
            <h3 className="mt-4 text-2xl font-bold text-orange-600">
              {feature.title}
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              {feature.text}
            </p>
          </div>
        ))}
      </section>

      {/* Product Section */}
      <section id="shop" className="px-8 lg:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <h2 className="text-5xl font-black text-green-600">
              Popular Fruits
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Farm fresh fruits delivered in minutes 🚚
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search fruits..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-5 py-3 rounded-2xl border border-orange-300 outline-none w-full lg:w-[250px]"
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-5 py-3 rounded-2xl border border-orange-300 outline-none"
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-4">
          <div className="px-5 py-3 bg-orange-100 rounded-2xl font-semibold text-orange-600">
            🍎 Organic Fruits
          </div>

          <div className="px-5 py-3 bg-green-100 rounded-2xl font-semibold text-green-600">
            🥭 Seasonal Fruits
          </div>

          <div className="px-5 py-3 bg-purple-100 rounded-2xl font-semibold text-purple-600">
            ✈️ Imported Fruits
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {filteredFruits.map((fruit, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >
              <div className="overflow-hidden">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-600">
                  {fruit.name}
                </h3>

                <p className="mt-2 text-gray-500 font-semibold">
                  ₹{fruit.price} / kg
                </p>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-green-600 font-semibold">
                    Delivery in 20 mins
                  </span>
                  <span className="text-yellow-500">★★★★★</span>
                </div>

                <button
                  onClick={() => toggleWishlist(fruit.name)}
                  className="absolute top-4 right-4 text-3xl z-10"
                >
                  {wishlist.includes(fruit.name) ? '❤️' : '🤍'}
                </button>

                <button
                  onClick={() => addToCart(fruit)}
                  className="mt-5 w-full py-3 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 hover:scale-105 transition duration-300"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-8 lg:px-20 pb-20">
        <h2 className="text-5xl font-black text-center text-orange-600 mb-12">
          Customer Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Priya Patel',
              review: 'Very fresh fruits and super fast delivery.',
            },
            {
              name: 'Rahul Sharma',
              review: 'Best online fruit shop experience in Ahmedabad.',
            },
            {
              name: 'Sneha Joshi',
              review: 'Affordable prices and premium quality fruits.',
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[30px] shadow-xl"
            >
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                {review.review}
              </p>
              <h3 className="mt-6 text-xl font-bold text-orange-600">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="mx-8 lg:mx-20 mb-20 rounded-[40px] bg-gradient-to-r from-orange-500 to-green-500 p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent)]"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">
              Get 20% Off
              <span className="block">On Your First Order</span>
            </h2>

            <p className="mt-4 text-lg text-orange-100 max-w-xl">
              Sign up today and enjoy healthy fruit deals delivered fresh every
              day.
            </p>
          </div>

          <button className="px-10 py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition duration-300">
            Claim Offer
          </button>
        </div>
      </section>

      {showCart && (
        <div className="fixed top-24 right-6 w-[360px] max-h-[80vh] overflow-y-auto bg-white text-black shadow-2xl rounded-[30px] p-6 z-50">
          <h2 className="text-3xl font-black text-orange-600 mb-6">
            Your Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <div className="space-y-5">
              {cart.map((item, index) => (
                <div key={index} className="border rounded-2xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-lg text-orange-600">
                        {item.name}
                      </h3>
                      <p>₹{item.price}</p>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => decreaseQuantity(index)}
                      className="w-10 h-10 rounded-full bg-red-100"
                    >
                      -
                    </button>

                    <span className="font-bold text-xl">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(index)}
                      className="w-10 h-10 rounded-full bg-green-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              <input
                type="text"
                placeholder="Delivery Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-4 py-3 border rounded-2xl"
              />

              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="w-full px-4 py-3 border rounded-2xl"
              />

              <h3 className="text-2xl font-black">
                Total: ₹{totalPrice}
              </h3>

              <button
                onClick={checkout}
                className="w-full py-4 bg-green-500 text-white rounded-2xl font-bold"
              >
                Pay with UPI
              </button>

              {paymentDone && (
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <h3 className="font-black text-orange-600">
                    Order Tracking
                  </h3>
                  <p className="mt-2 font-semibold">
                    {orderStatus}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white px-8 lg:px-20 py-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-black text-orange-400">
              Fruitopia
            </h3>
            <p className="mt-2 text-gray-400">
              Fresh fruits for a healthier lifestyle.
            </p>

            <div className="mt-4 text-gray-300 space-y-2">
              <p>📞 +91 98765 43210</p>
              <p>📧 support@fruitopia.in</p>
              <p>📍 Ahmedabad, Gujarat, India</p>
              <p>🕒 Open Daily: 7:00 AM – 10:00 PM</p>
            </div>
          </div>

          <div className="flex gap-6 text-lg text-gray-300">
            <a href="#" className="hover:text-orange-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          © 2026 Fruitopia. All rights reserved.
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
     </>
  );
}
