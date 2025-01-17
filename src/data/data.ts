const destinationsData = [
    {
        id: 1,
        image: "/images/destinations/Ella.jpg", // Scenic view in Ella
        destination: "Ella",
        travelers: 1200
    },
    {
        id: 2,
        image: "/images/destinations/Sigiriya.jpg", // Sigiriya Rock Fortress
        destination: "Sigiriya",
        travelers: 1800
    },
    {
        id: 3,
        image: "/images/destinations/Colombo.jpg", // Colombo street scene
        destination: "Colombo",
        travelers: 2500
    },
    {
        id: 4,
        image: "/images/destinations/Galle.jpg", // Galle Fort
        destination: "Galle",
        travelers: 1500
    },
    {
        id: 5,
        image: "/images/destinations/Nuwara-Eliya.jpg", // Tea plantations in Nuwara Eliya
        destination: "Nuwara Eliya",
        travelers: 1000
    }
];

const hotelsData = [
    {
        id: 1,
        image: "/images/hotels/Ella-Boutique-Resort.jpg",
        name: "Ella Boutique Resort",
        location: "Ella",
        rating: 3.7,
        reviews: 120,
        price: "$180 per night"
    },
    {
        id: 2,
        image: "/images/hotels/Sigiriya-Paradise-Hotel.jpg",
        name: "Sigiriya Paradise Hotel",
        location: "Sigiriya",
        rating: 4.5,
        reviews: 85,
        price: "$150 per night"
    },
    {
        id: 3,
        image: "/images/hotels/Colombo-Luxury-Stay.jpg",
        name: "Colombo Luxury Stay",
        location: "Colombo",
        rating: 3.8,
        reviews: 200,
        price: "$220 per night"
    },
    {
        id: 4,
        image: "/images/hotels/Galle-Seaside-Retreat.webp",
        name: "Galle Seaside Retreat",
        location: "Galle",
        rating: 4.6,
        reviews: 90,
        price: "$170 per night"
    },
    {
        id: 5,
        image: "/images/hotels/Highland-Bliss.jpg",
        name: "Highland Bliss",
        location: "Nuwara Eliya",
        rating: 4.9,
        reviews: 110,
        price: "$200 per night"
    },
    {
        id: 6,
        image: "/images/hotels/Centara-Ceysands.jpg",
        name: "Centara Ceysands",
        location: "Aluthgama",
        rating: 4.9,
        reviews: 110,
        price: "$100 per night"
    }
];

const toursData = [
    {
        id: 1,
        image: "/images/tour-ella.jpg",
        title: "Ella Scenic Trekking",
        location: "Ella",
        time: "4 hours",
        type: "Trekking",
        rating: 4.8,
        reviews: 95,
        price: "$50 per person"
    },
    {
        id: 2,
        image: "/images/tour-sigiriya.jpg",
        title: "Sigiriya Sunrise Tour",
        location: "Sigiriya",
        time: "6 hours",
        type: "Hiking",
        rating: 4.9,
        reviews: 120,
        price: "$70 per person"
    },
    {
        id: 3,
        image: "/images/tour-colombo.jpg",
        title: "Colombo City Walk",
        location: "Colombo",
        time: "3 hours",
        type: "Walking",
        rating: 4.6,
        reviews: 85,
        price: "$30 per person"
    },
    {
        id: 4,
        image: "/images/tour-galle.jpg",
        title: "Galle Fort Heritage Tour",
        location: "Galle",
        time: "2 hours",
        type: "Cultural",
        rating: 4.7,
        reviews: 110,
        price: "$40 per person"
    },
    {
        id: 5,
        image: "/images/tour-nuwara-eliya.jpg",
        title: "Nuwara Eliya Tea Experience",
        location: "Nuwara Eliya",
        time: "5 hours",
        type: "Nature",
        rating: 4.9,
        reviews: 100,
        price: "$60 per person"
    }
];

const reviewData = [
    {
        id: 1,
        name: "Alice Johnson",
        review: "Fantastic experience! Loved every minute of it.",
        image: "/images/review-alice.jpg"
    },
    {
        id: 2,
        name: "David Lee",
        review: "Beautiful scenery and top-notch hospitality.",
        image: "/images/review-david.jpg"
    },
    {
        id: 3,
        name: "Sophie Miller",
        review: "Great value for the price. Will visit again!",
        image: "/images/review-sophie.jpg"
    },
    {
        id: 4,
        name: "John Smith",
        review: "A perfect getaway destination, highly recommend!",
        image: "/images/review-john.jpg"
    },
    {
        id: 5,
        name: "Emily Brown",
        review: "The tour was well-organized and informative.",
        image: "/images/review-emily.jpg"
    }
];


const whyChooseUs = [
    {
        id: 1,
        title: "Why Travel My Sri Lanka?",
        mainDescription: "Discover the best of Sri Lanka with Travel My Sri Lanka. Our expertly crafted tours and personalized itineraries ensure you experience the island’s rich culture, history, and natural beauty like never before.",
        description: [
            { point: "Unmatched Experience", phrase: "We craft personalized itineraries to suit your interests, whether it’s adventure, culture, relaxation, or all of the above." },
            { point: "Expert Local Guides", phrase: "Our experienced and passionate guides ensure you get the insider’s perspective on Sri Lanka’s rich history, traditions, and culture." },
            { point: "Seamless Travel", phrase: "From airport pickups to luxury accommodations and guided tours, we take care of every detail so you can travel stress-free." },
            { point: "Sustainable Tourism", phrase: "We believe in responsible travel. By supporting local communities and eco-friendly initiatives, we ensure your journey leaves a positive impact." }
        ]
    }
];


const topExperiences = [
    {
        id: 1,
        image: "/images/reviews/cultural-escapes.jpg",
        title: "Cultural Escapes",
        description: "Immerse yourself in the wonders of Sri Lanka’s UNESCO World Heritage Sites like Sigiriya, Anuradhapura, and the Dambulla Cave Temples."
    },
    {
        id: 2,
        image: "/images/reviews/wildlife-safaris.jpg",
        title: "Wildlife Safaris",
        description: "Witness majestic elephants, elusive leopards, and exotic birdlife in their natural habitats at Yala, Udawalawe, and Wilpattu National Parks."
    },
    {
        id: 3,
        image: "/images/reviews/beach-bliss.webp",
        title: "Beach Bliss",
        description: "Relax on the pristine beaches of Bentota, Mirissa, or Trincomalee, or indulge in thrilling water sports along the coast."
    },
    {
        id: 4,
        image: "/images/reviews/hill-country-retreats.webp",
        title: "Hill Country Retreats",
        description: "Journey through the emerald tea plantations of Nuwara Eliya, ride the scenic train to Ella, and hike the trails of Horton Plains."
    }
];

export { destinationsData, topExperiences, hotelsData, whyChooseUs, toursData, reviewData };