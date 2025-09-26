// Smooth animations and interactions

// Add fade-in animation to tweets on load
document.addEventListener('DOMContentLoaded', function() {
    const tweets = document.querySelectorAll('.tweet');
    tweets.forEach((tweet, index) => {
        tweet.style.opacity = '0';
        tweet.style.transform = 'translateY(20px)';
        setTimeout(() => {
            tweet.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            tweet.style.opacity = '1';
            tweet.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Tweet button animation
const tweetButtons = document.querySelectorAll('.tweet-btn');
tweetButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Search input focus animation
const searchInput = document.querySelector('.search input');
searchInput.addEventListener('focus', function() {
    this.style.boxShadow = '0 0 0 2px #1da1f2';
    this.style.transition = 'box-shadow 0.2s ease';
});

searchInput.addEventListener('blur', function() {
    this.style.boxShadow = 'none';
});

const profiles = [
    {
        name: "John Doe",
        handle: "@johndoe",
        avatar: "https://tse4.mm.bing.net/th/id/OIP.FjSRywv2jSoO2kdlijRZ4gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        phrases: [
            "Just finished coding a new app! #devlife",
            "Learning React today. It's amazing! #webdev",
            "Coffee and code – my perfect morning. ☕💻",
            "Excited about the latest AI advancements! #AI",
            "Weekend plans: debugging and chill. 🐛",
            "Just deployed my project to production. 🚀",
            "Loving the new JavaScript features in ES2023.",
            "Time for a code review session. 👀",
            "Building a responsive website from scratch.",
            "Python vs JavaScript: what's your pick? #programming",
            "Discovered a cool new VS Code extension!",
            "Agile methodology in action today. #scrum",
            "Refactoring legacy code – the thrill! 😅",
            "Open source contribution accepted! 🎉",
            "Testing my app on multiple browsers.",
            "Docker containers make deployment easy.",
            "GraphQL over REST for APIs? Thoughts?",
            "Pair programming with a colleague – productive!",
            "CI/CD pipeline is up and running smoothly.",
            "Exploring microservices architecture.",
            "Just fixed a tricky bug after hours. 💪",
            "Reading 'Clean Code' by Robert C. Martin.",
            "Frontend frameworks: React, Vue, or Angular?",
            "Backend with Node.js – fast and scalable.",
            "Database optimization tips anyone?",
            "Version control with Git is essential.",
            "Cloud computing: AWS, Azure, or GCP?",
            "Security best practices for web apps.",
            "Mobile-first design approach wins.",
            "API documentation with Swagger.",
            "Unit testing saves time in the long run.",
            "Full-stack development is the future!"
        ]
    },
    {
        name: "Jane Smith",
        handle: "@janesmith",
        avatar: "https://tse4.mm.bing.net/th/id/OIP.FjSRywv2jSoO2kdlijRZ4gHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        phrases: [
            "Beautiful sunset today! 🌅 #nature",
            "Trying out a new recipe for dinner. 🍲",
            "Book recommendation: 'The Alchemist'. 📖",
            "Morning run felt amazing! 🏃‍♀️",
            "Loving this playlist on Spotify. 🎵",
            "Visited a new cafe – great vibes! ☕",
            "Gardening on the weekend. 🌱",
            "Watched a documentary on Netflix. 📺",
            "Friends gathering tonight! 👯‍♀️",
            "Yoga session cleared my mind. 🧘‍♀️",
            "Baking cookies from scratch. 🍪",
            "Hiking in the mountains – refreshing!",
            "Podcast episode was insightful. 🎙️",
            "Art gallery visit inspired me. 🎨",
            "Beach day with family. 🏖️",
            "Meditation for 10 minutes daily.",
            "New outfit for the week! 👗",
            "Cooking Italian pasta tonight. 🍝",
            "Stargazing under clear skies. ⭐",
            "Volunteer work at the shelter. ❤️",
            "Dance class was fun and energetic!",
            "Reading poetry in the park. 📚",
            "Picnic with homemade sandwiches.",
            "Photography walk in the city. 📸",
            "Wine tasting event upcoming. 🍷",
            "Knitting a scarf for winter. 🧶",
            "Birdwatching in the morning. 🐦",
            "Spa day to relax and unwind.",
            "Board games night with friends. 🎲",
            "Farmers market fresh produce! 🥦",
            "Sunrise yoga on the balcony.",
            "Journaling my thoughts daily."
        ]
    }
];

let phraseIndices = new Array(profiles.length).fill(0);
let tweetCount = 1;

// Infinite scroll simulation (for demo purposes)
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        // Simulate loading more tweets
        const feed = document.querySelector('.feed');
        const newTweet = document.createElement('div');
        newTweet.className = 'tweet';
        
        const profileIndex = (tweetCount - 1) % profiles.length;
        const profile = profiles[profileIndex];
        const phraseIndex = phraseIndices[profileIndex] % 32;
        const phrase = profile.phrases[phraseIndex];
        phraseIndices[profileIndex]++;
        
        newTweet.innerHTML = `
            <div class="tweet-header">
                <div class="avatar">
                    <img src="${profile.avatar}" alt="${profile.name}">
                </div>
                <div class="user-info">
                    <span class="name">${profile.name}</span>
                    <span class="handle">${profile.handle}</span>
                    <span class="time">· now</span>
                </div>
            </div>
            <div class="tweet-content">
                <p>${phrase}</p>
            </div>
            <div class="tweet-actions">
                <button>💬</button>
                <button>🔄</button>
                <button>❤️</button>
                <button>📤</button>
            </div>
        `;
        newTweet.style.opacity = '0';
        newTweet.style.transform = 'translateY(20px)';
        feed.appendChild(newTweet);
        setTimeout(() => {
            newTweet.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            newTweet.style.opacity = '1';
            newTweet.style.transform = 'translateY(0)';
        }, 100);
        tweetCount++;
    }
});
