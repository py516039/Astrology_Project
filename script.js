
//based on month of birth of size 12
const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", 
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];


// Array of 31 compliments
// based on date
const compliments = [
    "You are an amazing person! 🌟",
    "Your smile can brighten anyone's day! 😊",
    "You have a heart of gold! 💛",
    "Your kindness is contagious! 💖",
    "You are incredibly talented! 🎨",
    "You make the world a better place! 🌎",
    "You are a ray of sunshine! ☀️",
    "You have a fantastic sense of humor! 😂",
    "You are more powerful than you realize! 💪",
    "Your creativity is inspiring! 🎭",
    "You are a true gem! 💎",
    "You bring positivity wherever you go! 🌈",
    "You are wise beyond your years! 📚",
    "Your confidence is inspiring! ✨",
    "You are one of a kind! 🔥",
    "You radiate happiness! 😃",
    "You have a beautiful soul! 🕊️",
    "You are stronger than you think! 💖",
    "Your energy is magnetic! ⚡",
    "You spread love effortlessly! ❤️",
    "You make the impossible possible! 🚀",
    "You are full of good vibes! 🎶",
    "You are destined for greatness! 🏆",
    "You make people feel special! 🤗",
    "You are the definition of awesome! 🤩",
    "You light up the room! 🔆",
    "Your personality is pure magic! ✨",
    "You bring out the best in people! 💕",
    "You have a heartwarming presence! 💞",
    "You are a blessing to those around you! 🌟",
    "Your spirit is truly uplifting! 🙌"
];

//size 20
const victimCardCompliments = [
    "You always go out of your way for others, but they rarely do the same for you. 😔",
    "Your kindness is often taken for granted, yet you never stop giving. 💙",
    "You always understand others, but when you need understanding, it's rare. 🤷‍♂️",
    "You always check on others, but how often do they check on you? 🤔",
    "You give 100% in relationships, while others give only when convenient. 💔",
    "You're always there for people, but when you need someone, it's just silence. 📞",
    "You always forgive, even when no one apologizes. 😞",
    "Your loyalty is unmatched, but others switch up too easily. 🥺",
    "You always put others first, even when it hurts you. 💔",
    "You carry the weight of others’ problems, but who carries yours? 😔",
    "You make time for people who won’t even spare a second for you. ⏳",
    "You listen to everyone's problems, but no one asks about yours. 😕",
    "You give love freely, even when it's not returned the same way. 💞",
    "Your heart is too big for a world that often doesn’t appreciate it. 💔",
    "You always see the good in people, even when they show you their worst. 🌫️",
    "You're always expected to be strong, but no one sees your struggles. 🏋️‍♂️",
    "You would never treat people the way they treat you, and that says everything. 💡",
    "You’re the person everyone relies on, but who can you rely on? 🤷",
    "You help heal others, but no one asks if you need healing. 💭",
    "You always give second chances, even when you never got one. 🔄"
];


// size 30
const Recommendations = [
    "🌿 Feed green fodder to cows on Monday for prosperity. 🐄",
    "🔥 Avoid arguing on Tuesday to prevent negative energy. ❌",
    "🍚 Donate rice or milk on Wednesday for mental peace. 🥛",
    "💰 Avoid lending money on Thursday to ensure financial stability. 💵",
    "🎶 Listen to devotional music on Friday to attract positivity. 🎵",
    "🚫 Avoid cutting nails or hair on Saturday to prevent bad luck. ✂️",
    "🕯️ Light a mustard oil lamp under a Peepal tree on Saturday for karma cleansing. 🌳",
    "🌸 Offer white flowers to Goddess Lakshmi on Friday for wealth. 💰",
    "🍎 Avoid eating non-vegetarian food on Monday for spiritual balance. 🥗",
    "📿 Recite Hanuman Chalisa on Tuesday to remove obstacles. 🏹",
    "🥛 Donate milk on Monday to calm planetary effects. 🌕",
    "🔥 Avoid eating spicy food on Sunday to balance your Sun energy. 🌞",
    "📘 Read the Bhagavad Gita on Wednesday for wisdom. 📖",
    "🍯 Offer jaggery to monkeys on Tuesday to reduce Mars' negative impact. 🐒",
    "🛑 Avoid wearing black on Saturday to reduce Saturn's influence. ⚫",
    "🌕 Fasting on Purnima (Full Moon) brings mental clarity and peace. ✨",
    "🥄 Donate yellow lentils on Thursday to strengthen Jupiter’s blessings. 🌟",
    "🏠 Avoid sweeping your house after sunset to keep wealth intact. 🏡",
    "🔔 Ringing a temple bell on Wednesday attracts positive vibrations. 🔔",
    "🛕 Visiting a temple on Sunday brings blessings from the Sun God. 🌞",
    "🌱 Water a Tulsi plant every morning for overall well-being. 🍃",
    "🍽️ Avoid eating leftovers on Friday to attract good fortune. 🍛",
    "🧂 Donate salt on Saturday to reduce the effects of Shani (Saturn). 🪐",
    "🍊 Offer sweet fruits to the needy on Thursday to bring good karma. 🍉",
    "👚 Wear white clothes on Monday for a peaceful mind. 🤍",
    "💼 Avoid making major financial decisions on Tuesday. 🚫💰",
    "🥛 Drink saffron milk on Thursday to enhance wisdom. 🌟",
    "🌚 Avoid looking at the moon on Ganesh Chaturthi to prevent bad luck. 🚫🌙",
    "🎭 Donate clothes to the needy on Wednesday for better communication skills. 👕",
    "🛑 Avoid lying on Saturday to avoid karma’s backlash. ❌"
];



// size 20
const futurePredictions = [
    "💰 You will become a crorepati soon! Stay patient and keep working hard. 🏦",
    "✈️ A surprise international trip is coming your way! Get ready to pack your bags. 🌍",
    "💖 Love is on its way! Someone special will enter your life soon. ❤️",
    "📈 A big financial gain is waiting for you in the near future. Be ready to invest wisely! 💵",
    "🏡 You will buy your dream house soon! Keep manifesting. 🏠",
    "🚗 A brand new luxury car is coming into your life! Drive with pride. 🚘",
    "📚 You will soon gain wisdom and knowledge that will change your life. Keep learning! 🧠",
    "🎉 A huge celebration is coming your way! Be prepared for good times. 🎊",
    "🧿 You are protected from negativity! Good energy is surrounding you. 🌟",
    "🎬 Your dream job is on the horizon! Stay focused and you will achieve success. 🏆",
    "💍 Marriage or a strong relationship commitment is in your future! Get ready for love. 💑",
    "👨‍👩‍👧‍👦 Family happiness and harmony are increasing in your life. Cherish the moments! 🏡",
    "📜 A long-awaited wish of yours is about to come true! Keep believing. 🌠",
    "🏆 Recognition and fame are waiting for you! The world will know your name. 🌍",
    "💼 A big career breakthrough is coming your way! A promotion or a new opportunity awaits. 🚀",
    "🍀 Luck is on your side! You will receive unexpected blessings. 🍾",
    "🎤 Your talent will soon be recognized, and people will admire your skills. 🎭",
    "🏖️ A peaceful and relaxing vacation is waiting for you. Time to unwind! 🏝️",
    "🌟 You will soon meet someone who will change your life in a positive way. ✨",
    "🕊️ Inner peace and happiness are on the way. Your life is about to become stress-free. 😌"
];





const Name = document.querySelector("#name")
const Surname = document.querySelector("#surname")
const Day = document.querySelector("#day")
const Month = document.querySelector("#month")
const Year = document.querySelector("#year")
const result = document.querySelector("#result")
const Form = document.querySelector("#astroform");
const button  = document.querySelector("submit");

Form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const firstInput = Name.value;
    const secondInput = Surname.value;
    const thirdInput = Number(Day.value);
    const fourthInput = Number(Month.value);
    const fifthInput = Number(Year.value);

    

    const index = Math.floor(Math.random()*victimCardCompliments.length);

    const firstMessage = `Hello ${firstInput} ${secondInput}`

    const secondMessage = `Your zodiac sign is : ${zodiacSigns[fourthInput-1]}`;

    const thirdMessage = `About You : ${compliments[thirdInput-1]}`;

    const fourthMessage = `${victimCardCompliments[index]}`;
    
    const index2 = (firstInput.length*secondInput.length*fourthInput)%30;
    
    const fifthMessage = `Our Recommendation For You : ${Recommendations[index2]}`;


    const index3 = (firstInput.length*thirdInput*secondInput.length)%20;
    const sixthMessage = `Prediction : ${futurePredictions[index3]}`




    result.innerHTML = `${firstMessage}.    </br>${secondMessage}.    </br>${thirdMessage}.    </br>${fourthMessage}.    </br>${fifthMessage}.    </br>${sixthMessage}.`

    return;

})






