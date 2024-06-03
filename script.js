const profiles = {
    boss: {
        name: "Asif Ahmed",
        position: "CEO",
        details: "The leader of the team.",
        image: "BOSS.jpeg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/asif.ahmed.583"
        },
        performance: 100 // Example performance score
    },
    employee1: {
        name: "Murad Hossain",
        position: "Developer",
        details: "Studied at Carmichael University College, Rangpur.",
        image: "murad caca.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/m.murad.12345"
        },
        performance: 100
    },
    employee2: {
        name: "অ লি প",
        position: "Developer",
        details: "Studied at Rangpur Technical School & College - RTSC.",
        image: "alip vai.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/hardless.boyakash.3"
        },
        performance: 100
    
    },
    employee3: {
        name: "Md Ashik Islam",
        position: "Developer",
        details: "Studied at Rangpur Ideal Institute Of Technology (RIIT).",
        image: "mama.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/mdashikIsla.37266"
        },
        performance: 100
    
    },
    employee4: {
        name: "Abdur Rohim",
        position: "Developer",
        details: "Studied at Shahzadpur Govt. College.",
        image: "rohim vi.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/mdabdurrohim017"
        },
        performance: 100
    
    },
    employee5: {
        name: "MD Shahed Bosunia",
        position: "Developer",
        details: "Studied at Bongobondhu govt college,Badalgachhi.",
        image: "bosu vaiiii.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/mdshahed.bosunia"
        },
        performance: 100
    
    },
    employee6: {
        name: "Md Numan Hossen Shourov",
        position: "Developer",
        details: "Studied at Carmichael College Rangpur.",
        image: "sourov vi.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/profile.php?id=100016783481423"
        },
        performance: 100
    
    },
    employee7: {
        name: "So Jib ",
        position: "Developer",
        details: "Studied at কাউনিয়া কলেজ, রংপুর.",
        image: "sojib vi 2.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/so.jib.73932646"
        },
        performance: 100
    
    },
    employee8: {
        name: "Shamim hossen",
        position: "Developer",
        details: "তোমার দেখা পাই যদি ❤️ বৃষ্টি মেঘের দিনে  তোমার প্রেমে পড়বো বাধা, ভালোবাসার ঋীনে❤.",
        image: "sm vai.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/profile.php?id=100083327587561"
        },
        performance: 100
    
    },
    employee9: {
        name: "রোমান সরকার সান্ত",
        position: "Developer",
        details: "Studied at Carmichael College Rangpur.",
        image: "roman bro.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/profile.php?id=100050271443515"
        },
        performance: 100
    
    },
    employee10: {
        name: "Alex Maruf",
        position: "Developer",
        details: "Studied at পীরগাছা সরকারি কলেজ, পীরগাছা, রংপুর.",
        image: "caca.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/profile.php?id=100060939437610"
        },
        performance: 100
    
    },
    employee11: {
        name: "MD Rakibul Islam Ridoy",
        position: "Developer",
        details: "Went to Lions School And College,Rangpur.",
        image: "ridoy.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/MarketerRidoy7"
        },
        performance: 100
    
    },
    // Add other employees similarly
    employee12: {
        name: "Mosabbir Rahman Sabbir",
        position: "..",
        details: "..",
        image: "me.jpg",
        social: {
            skype: "https://skype.com",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com/profile.php?id=100021741203619"
        },
        performance: 50
    }
};

function showDetails(profileId) {
    const profile = profiles[profileId];
    let profileDetails = `
        <img src="${profile.image}" alt="${profile.name} Picture">
        <h2>${profile.name}</h2>
        <p><strong>Position:</strong> ${profile.position}</p>
        <p><strong>Details:</strong> ${profile.details}</p>
        <div class="social-media">
            <a href="${profile.social.skype}" target="_blank"><i class="fab fa-skype"></i></a>
            <a href="${profile.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="${profile.social.facebook}" target="_blank"><i class="fab fa-facebook"></i></a>
        </div>
        <div class="progress-container">
            <div class="progress-bar" style="width: ${profile.performance}%;"></div>
        </div>
    `;

    document.getElementById('profile-details').innerHTML = profileDetails;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
