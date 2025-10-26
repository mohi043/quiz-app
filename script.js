const quizData = [
    {
        question: "Which S. S. Rajamouli film features the iconic song 'Naatu Naatu' that won an Academy Award for Best Original Song?",
        a: "Baahubali: The Beginning",
        b: "Eega",
        c: "RRR",
        d: "Magadheera",
        correct: "c",
    },
    {
        question: "Which Telugu actor is popularly known by the nickname 'Power Star'?",
        a: "Chiranjeevi",
        b: "Pawan Kalyan",
        c: "Mahesh Babu",
        d: "Allu Arjun",
        correct: "b",
    },
    {
        question: "What is the name of the fictional kingdom in the two-part blockbuster series 'Baahubali'?",
        a: "Dwaraka",
        b: "Mahishmati",
        c: "Ayodhya",
        d: "Vijayanagara",
        correct: "b",
    },
    {
        question: "Identify the Telugu movie from this iconic dialogue: 'Okkasari commit aitey naa maata nene vinanu.'",
        a: "Pokiri",
        b: "Gabbar Singh",
        c: "Athadu",
        d: "Indra",
        correct: "a",
    },
    {
        question: "Which of these films, starring Vijay Deverakonda, was later remade in Hindi as 'Kabir Singh'?",
        a: "Geetha Govindam",
        b: "Pelli Choopulu",
        c: "Dear Comrade",
        d: "Arjun Reddy",
        correct: "d",
    },
    {
        question: "Who directed the critically acclaimed film 'Sankarabharanam' (1980), known for promoting classical Indian music?",
        a: "K. Raghavendra Rao",
        b: "Dasari Narayana Rao",
        c: "K. Viswanath",
        d: "Bapu",
        correct: "c",
    },
    {
        question: "The 2018 biographical film 'Mahanati' is based on the life of which legendary South Indian actress?",
        a: "Savitri",
        b: "Sridevi",
        c: "Jayasudha",
        d: "Bhanumathi",
        correct: "a",
    },
    {
        question: "Which Telugu movie holds the record for being the first Indian film to cross the ₹1000 Crore mark worldwide?",
        a: "Pushpa: The Rise",
        b: "Sye Raa Narasimha Reddy",
        c: "RRR",
        d: "Baahubali 2: The Conclusion",
        correct: "d",
    },
    // --- New Questions (2000 - Present) ---
    {
        question: "Allu Arjun won a National Film Award for Best Actor for his role as Pushpa Raj in which film?",
        a: "Ala Vaikunthapurramuloo",
        b: "Sarrainodu",
        c: "Pushpa: The Rise",
        d: "Arya",
        correct: "c",
    },
    {
        question: "Who is the director, also known as 'Maatala Maanthrikudu' (Wizard of Words), famous for films like 'Athadu' and 'Ala Vaikunthapurramuloo'?",
        a: "Sukumar",
        b: "Puri Jagannadh",
        c: "Trivikram Srinivas",
        d: "Koratala Siva",
        correct: "c",
    },
    {
        question: "Which film starring Prabhas was directed by Puri Jagannadh and featured the popular dialogue 'Evadu kodithe dimma thirigi mind block aipoddo, vaade Pandu Gaadu'?",
        a: "Chatrapathi",
        b: "Bujjigadu",
        c: "Ek Niranjan",
        d: "Pokiri",
        correct: "d",
    },
    {
        question: "The 2015 war film 'Kanche', which won a National Award, is set against the backdrop of which major historical event?",
        a: "Indo-Pak War of 1971",
        b: "World War II",
        c: "Sepoy Mutiny of 1857",
        d: "World War I",
        correct: "b",
    },
    {
        question: "Which movie is considered the debut film for actor Nani in a lead role?",
        a: "Ashta Chamma",
        b: "Ride",
        c: "Pilla Zamindar",
        d: "Ala Modalaindi",
        correct: "a",
    },
    {
        question: "In the movie 'Nuvvu Naaku Nachav' (2001), who played the iconic comedy role of an aspiring actor constantly trying to impress a film director?",
        a: "Brahmanandam",
        b: "Sunil",
        c: "M.S. Narayana",
        d: "Venu Madhav",
        correct: "b",
    },
    {
        question: "The director **Sekhar Kammula** is known for his unique, realistic style and directed which of these popular films set in Telangana?",
        a: "Fidaa",
        b: "Happy Days",
        c: "Anand",
        d: "Godavari",
        correct: "a",
    },
    {
        question: "Which Mahesh Babu film from 2005, directed by Trivikram Srinivas, is famous for its stylized action and memorable family sentiment scenes?",
        a: "Okkadu",
        b: "Athadu",
        c: "Sainikudu",
        d: "Murari",
        correct: "b",
    },
    {
        question: "The film **'Eega'** (2012) features which creature as the main protagonist seeking revenge?",
        a: "A housefly",
        b: "A mosquito",
        c: "A cockroach",
        d: "A bee",
        correct: "a",
    },
    {
        question: "Which actor stars as Chitti, a police officer, in the film 'Sarileru Neekevvaru'?",
        a: "Ram Charan",
        b: "Mahesh Babu",
        c: "Naga Chaitanya",
        d: "Jr. NTR",
        correct: "b",
    },
    {
        question: "Who composed the music for the romantic blockbuster 'Aarya' (2004)?",
        a: "Devi Sri Prasad",
        b: "M. M. Keeravani",
        c: "Mani Sharma",
        d: "Mickey J. Meyer",
        correct: "a",
    },
    {
        question: "Which 2019 crime thriller, a remake of a Spanish film, features Adivi Sesh and Regina Cassandra?",
        a: "Goodachari",
        b: "Kshanam",
        c: "Evaru",
        d: "HIT: The First Case",
        correct: "c",
    },
    {
        question: "Which **Siddharth** film, directed by Boyapati Srinu, is famous for its energetic title track 'Nuvvu Nuvvu' and box office success in 2003?",
        a: "Athanokkade",
        b: "Jayam",
        c: "Dil",
        d: "Okkadu",
        correct: "c",
    },
    {
        question: "Who was the music director for the film **'Gabbar Singh'** (2012), known for its massive hit album?",
        a: "Thaman S",
        b: "Devi Sri Prasad",
        c: "Mani Sharma",
        d: "Yuvan Shankar Raja",
        correct: "b",
    },
    {
        question: "The director **Krish** (Radhakrishna Jagarlamudi) is known for social dramas. Which of these films was NOT directed by him?",
        a: "Vedam",
        b: "Gamyam",
        c: "Krishnam Vande Jagadgurum",
        d: "Bommarillu",
        correct: "d",
    },
    {
        question: "Which **Venkatesh** starrer, released in 2002, is a romantic comedy featuring him as a chef on a quest for true love?",
        a: "Malliswari",
        b: "Vasantham",
        c: "Vasu",
        d: "Nuvvu Naaku Nachav",
        correct: "c",
    },
    {
        question: "Who played the main antagonist Bhallaladeva in the **'Baahubali'** series?",
        a: "Rana Daggubati",
        b: "Sathyaraj",
        c: "Ramya Krishnan",
        d: "Nassar",
        correct: "a",
    },
    {
        question: "The 2016 coming-of-age romantic drama **'Pelli Choopulu'** marked the directorial debut of which filmmaker?",
        a: "Shiva Nirvana",
        b: "Tharun Bhascker Dhaassyam",
        c: "Venu Udugula",
        d: "Sandip Reddy Vanga",
        correct: "b",
    },
    {
        question: "Which film gave Jr. NTR his breakthrough role as a lead actor, directed by S. S. Rajamouli in **2001**?",
        a: "Aadi",
        b: "Yamadonga",
        c: "Simhadri",
        d: "Student No. 1",
        correct: "d",
    },
    {
        question: "Which actress made her Telugu debut opposite Ram Charan in the 2007 action film **'Chirutha'**?",
        a: "Ileana D'Cruz",
        b: "Kajal Aggarwal",
        c: "Shruti Haasan",
        d: "Anushka Shetty",
        correct: "b",
    },
    {
        question: "Which **historical film** starring Chiranjeevi is based on the life of freedom fighter Uyyalawada Narasimha Reddy?",
        a: "Indra",
        b: "Khaidi No. 150",
        c: "Sye Raa Narasimha Reddy",
        d: "Magaadheera",
        correct: "c",
    },
    {
        question: "What is the English title of the 2006 film **'Bommarillu'** (House of Dolls), known for its take on over-protective fatherhood?",
        a: "The Perfect Son",
        b: "My Sweet Home",
        c: "Ready",
        d: "Happy Days",
        correct: "b",
    },
];

// ************************************************************

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

// --- Suggested Modification for Random 4 Questions ---
let randomQuizData = []; 

// Function to shuffle and select the first 4 questions
function selectRandomQuestions(data, count) {
    // Create a copy of the array
    const shuffled = [...data];
    // Shuffle the array (Fisher-Yates algorithm)
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // Return the first 'count' elements
    return shuffled.slice(0, count);
}

// Select 4 random questions on quiz start
randomQuizData = selectRandomQuestions(quizData, 4); 

// --- End of suggested modification for Random 4 Questions ---

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    // --- Use randomQuizData instead of the original quizData array ---
    const currentQuizData = randomQuizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        // --- Use randomQuizData for checking the correct answer ---
        if(answer === randomQuizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        // --- Use randomQuizData.length (which is 4) for the total count ---
        if(currentQuiz < randomQuizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${randomQuizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

