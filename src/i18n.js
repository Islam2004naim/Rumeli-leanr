import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                home: "Home",
                tutors: "Tutors",
                blog: "Blog",
                contact: "Contact",
                login: "Login",
                hero: {
                    badge: "#1 Trusted Online Tutoring Platform",
                    title: "Personalized 1-on-1 Tutoring for Every Learner, Anytime, Anywhere",
                    description: "Experience expert guidance with our advanced platform that connects students with top tutors across a range of subjects built for results, flexibility, and growth.",
                    btnRegister: "Register Now",
                    btnBook: "Book Appointment"
                },
                features: {
                    title: "Quality Education",
                    Lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deserunt porro itaque repellendus ipsum veritatis dolor aperiam.",
                    text1: "24/7 Availability",
                    text2: "Flexible Learning",
                    text3: "Expert Mentors",
                },
                subjects: {
                    h3: "Explore By Subject",
                    p: "Whether you're diving into math, mastering a language, or exploring science and tech, our subject-wise categories make it easy",
                },
                featuresT: {
                    title: "Made For professionals",
                    text: "Delivering Quality Education",
                    text1: "Our platform is designed to empower professional tutors who are passionate about sharing knowledge and shaping futures.",
                    text2: "View Profile",
                    text3: "Explore Tutors"
                },
                About: {
                    h3: "Chosen By Thousands Of Learners And Top Instructors",
                    text: "Our platform brings together thousands of motivated learners and highly-rated tutors from around the world.",
                    h4: "Do you have formal teaching experience?",
                    text1: "Share your academic background and teaching history to help us verify your profile. Experienced tutors gain more visibility and trust among students.",
                    h5: "Become a tutor on our platform",
                    h4_1: "Teachers What you love",
                    text2: "Share your knowledge, connect with eager learners, and inspire growth through flexible, personalized online tutoring sessions.",
                    h4_2: "Teachers on your Schedule",
                    text3: "Enjoy complete freedom to set your own hours, manage your time efficiently, and grow your tutoring practice while earning from anywhere.",
                    h4_3: "Teachers Your Own Way",
                    text4: "Select your preferred teaching methods and build unique learning experiences that resonate with your students."
                },
                Footer: {
                    ptext: "We connect students with certified online tutors from around the globe. Whether you're preparing for exams or mastering new skills, our platform helps you learn with confidence.",
                    text: "Mathematics",
                    text1: "Computer Science",
                    text2: "Physics",
                    text3: "English Language",
                    text4: "WhatsApp Support:",
                    text5: "Email Address:",
                    text6: "Location:",
                    text7: "Rumeli Learn. All rights reserved.",
                    text8: "Privacy Policy:",
                    text9: "Terms of Service",
                    text10: "Cookie Settings"
                },
                Tutors: {
                    title: "Get Started a Skilled Tutor",
                    text: "delivering quality education",
                    ptext: "Our platform is designed to empower professional tutors who are passionate about sharing knowledge and shaping futures.",
                },
                categories: {
                    all: "All",
                    mathematics: "Mathematics",
                    science: "Science",
                    commerce: "Commerce",
                    computer: "Computer",
                    languages: "Languages",
                    arts: "Arts",
                    productivity: "Productivity",
                    "e-learning": "E-Learning",
                    tutoring: "Tutoring",
                    edtech: "EdTech",
                    "study skills": "Study Skills",
                    technology: "Technology",
                    resources: "Resources",
                    "online learning": "Online Learning"
                },
                Sessions: {
                    text: "Experience",
                    text1: "Fee",
                    text2: "/30min",
                    text3: "Location",
                    text4: "About Me",
                    text5: "Book Session",
                    text6: "Loading Tutor information...",
                    subject: "Subject",
                    bookingSlots: "Booking Slots",
                    unavailable: "Unavailable"
                },
                Contact: {
                    h1_1: "Get",
                    h1_2: "In Touch",
                    p: "Have questions or need help? Send us a message, and we'll get back to you as soon as possible.",
                    h2_1: "Contact",
                    h2_2: "Details",
                    p1: "We are always here to assist you! Feel free to reach out to us through any of the following methods",
                    location: "Location:",
                    loc_val: "Istanbul, Turkey",
                    email: "Email:",
                    email_val: "support@rumelilearn.com",
                    phone: "Phone:",
                    phone_val: "+90 555 123 4567",
                    support: "Support:",
                    support_val: "24/7 Support available",
                    name_ph: "Enter your name",
                    email_ph: "Enter your email",
                    msg_ph: "Write your message here",
                    btn: "Send Message"
                },
                header: {
                    myProfile: "My Profile",
                    mySessions: "My Sessions",
                    logout: "Logout"
                },
                profile: {
                    title: "Personal Details",
                    locationTitle: "Location Details",
                    fullName: "Full Name",
                    phone: "Phone",
                    dob: "Date of Birth",
                    gender: "Gender",
                    city: "City",
                    country: "Country",
                    save: "Save Profile Changes",
                    edit: "Edit My Profile",
                    upload: "Upload Photo",
                    name_ph: "Enter your name",
                    email_ph: "Enter your email",
                    male: "Male",
                    female: "Female",
                    other: "Other"
                },
                auth: {
                    login: "Login",
                    signup: "Sign Up",
                    fullName: "Full Name",
                    email: "Email",
                    password: "Password",
                    createAccount: "Create account",
                    alreadyAccount: "Already have an account?",
                    dontHaveAccount: "Don't have an account?",
                    loginHere: "Login here",
                    forgotPassword: "Forgot your password?",
                    forgotText: "Forgot your password?"
                },
                mySessions: {
                    title: "My Upcoming Sessions",
                    address: "Address:",
                    dateTime: "Date & Time:",
                    cancel: "Cancel Session",
                    pay: "Pay Online",
                    noSessions: "You have no upcoming sessions yet.",
                    bookFirst: "Book Your First Session",
                    session: "session"
                },
                blogPage: {
                    title: "Our Blog",
                    description: "Explore insights, tips, and the latest trends in online education and tutoring",
                    continueReading: "continue reading",
                    noBlogs: "No blogs found in this category"
                }
            }
        },
        tr: {
            translation: {
                home: "Ana Sayfa",
                tutors: "Eğitmenler",
                blog: "Blog",
                contact: "İletişim",
                login: "Giriş Yap",
                hero: {
                    badge: "#1 Güvenilir Online Ders Platformu",
                    title: "Her Öğrenci İçin Her Zaman, Her Yerde Kişiselleştirilmiş 1-e-1 Özel Ders",
                    description: "Öğrencileri sonuçlar, esneklik ve gelişim için oluşturulmuş çeşitli konularda en iyi eğitmenlerle buluşturan gelişmiş platformumuzla uzman rehberliğini deneyimleyin.",
                    btnRegister: "Şimdi Kaydol",
                    btnBook: "Randevu Al"
                },
                features: {
                    title: "Kaliteli Eğitim",
                    Lorem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates deserunt porro itaque repellendus ipsum veritatis dolor aperiam.",
                    text1: "7/24 Kullanılabilirlik",
                    text2: "Esnek Öğrenme",
                    text3: "Uzman Mentorlar",
                },
                subjects: {
                    h3: "Konuya Göre Keşfedin",
                    p: "İster matematiğe dalın, ister bir dilde ustalaşın, ister fen ve teknolojiyi keşfedin, konu bazlı kategorilerimiz işinizi kolaylaştırır",
                },
                featuresT: {
                    title: "Profesyoneller İçin Üretildi",
                    text: "Kaliteli Eğitim Sunmak",
                    text1: "Platformumuz, bilgi paylaşmaya ve gelecekleri şekillendirmeye tutkulu profesyonel eğitmenleri güçlendirmek için tasarlanmıştır.",
                    text2: "Profili Görüntüle",
                    text3: "Eğitmenleri Keşfedin"
                },
                About: {
                    h3: "Binlerce Öğrenci ve Uzman Eğitmen Tarafından Seçildi",
                    text: "Platformumuz, dünyanın her yerinden binlerce motivasyonu yüksek öğrenciyi ve yüksek puanlı eğitmeni bir araya getiriyor.",
                    h4: "Resmi öğretmenlik deneyiminiz var mı?",
                    text1: "Profilinizi doğrulamamıza yardımcı olmak için akademik geçmişinizi ve öğretim geçmişinizi paylaşın. Deneyimli eğitmenler öğrenciler arasında daha fazla görünürlük ve güven kazanır.",
                    h5: "Platformumuzda eğitmen olun",
                    h4_1: "Sevdiğiniz Şeyi Öğretin",
                    text2: "Bilginizi paylaşın, istekli öğrencilerle bağlantı kurun ve esnek, kişiselleştirilmiş çevrimiçi ders oturumlarıyla gelişime ilham verin.",
                    h4_2: "Kendi Programınızda Öğretin",
                    text3: "Kendi saatlerinizi belirleme, zamanınızı verimli bir şekilde yönetme ve her yerden kazanırken özel ders pratiğinizi büyütme özgürlüğünün tadını çıkarın.",
                    h4_3: "Kendi Yönteminizle Öğretin",
                    text4: "Tercih ettiğiniz öğretim yöntemlerini seçin ve öğrencilerinizde yankı uyandıran benzersiz öğrenme deneyimleri oluşturun."
                },
                Footer: {
                    ptext: "Öğrencileri dünyanın dört bir yanından sertifikalı çevrimiçi eğitmenlerle buluşturuyoruz. İster sınavlara hazırlanıyor ister yeni beceriler ediniyor olun, platformumuz güvenle öğrenmenize yardımcı olur.",
                    text: "Matematik",
                    text1: "Bilgisayar Bilimi",
                    text2: "Fizik",
                    text3: "İngilizce Dili",
                    text4: "WhatsApp Desteği:",
                    text5: "E-posta Adresi:",
                    text6: "Konum:",
                    text7: "Rumeli Learn. Tüm hakları saklıdır.",
                    text8: "Gizlilik Politikası:",
                    text9: "Hizmet Şartları",
                    text10: "Çerez Ayarları"
                },
                Tutors: {
                    title: "Uzman Bir Eğitmenle Başlayın",
                    text: "kaliteli eğitim sunmak",
                    ptext: "Platformumuz, bilgi paylaşmaya ve gelecekleri şekillendirmeye hevesli profesyonel eğitmenleri güçlendirmek için tasarlanmıştır."
                },
                categories: {
                    all: "Hepsi",
                    mathematics: "Matematik",
                    science: "Fen Bilimleri",
                    commerce: "Ticaret",
                    computer: "Bilgisayar",
                    languages: "Diller",
                    arts: "Sanat",
                    productivity: "Produktivite",
                    "e-learning": "E-Öğrenme",
                    tutoring: "Özel Ders",
                    edtech: "Eğitim Teknolojis",
                    "study skills": "Çalışma Becerileri",
                    technology: "Teknoloji",
                    resources: "Kaynaklar",
                    "online learning": "Online Öğrenme"
                },
                Sessions: {
                    text: "Deneyim",
                    text1: "Ücret",
                    text2: "/30dk",
                    text3: "Konum",
                    text4: "Hakkımda",
                    text5: "Oturum Ayarla",
                    text6: "Eğitmen bilgileri yükleniyor...",
                    subject: "Ders",
                    bookingSlots: "Randevu Saatleri",
                    unavailable: "Müsait Değil"
                },
                Contact: {
                    h1_1: "Bizimle",
                    h1_2: "İletişime Geçin",
                    p: "Sorularınız mı var veya yardıma mı ihtiyacınız var? Bize bir mesaj gönderin, en kısa sürede size geri döneceğiz.",
                    h2_1: "İletişim",
                    h2_2: "Bilgileri",
                    p1: "Size yardımcı olmak için her zaman buradayız! Aşağıdaki yöntemlerden herhangi biriyle bize ulaşmaktan çekinmeyin",
                    location: "Konum:",
                    loc_val: "İstanbul, Türkiye",
                    email: "E-posta:",
                    email_val: "support@rumelilearn.com",
                    phone: "Telefon:",
                    phone_val: "+90 555 123 4567",
                    support: "Destek:",
                    support_val: "7/24 Destek mevcut",
                    name_ph: "Adınızı giriniz",
                    email_ph: "E-postanızı giriniz",
                    msg_ph: "Mesajınızı buraya yazın",
                    btn: "Mesaj Gönder"
                },
                header: {
                    myProfile: "Profilim",
                    mySessions: "Oturumlarım",
                    logout: "Çıkış Yap"
                },
                profile: {
                    title: "Kişisel Bilgiler",
                    locationTitle: "Konum Bilgileri",
                    fullName: "Ad Soyad",
                    phone: "Telefon",
                    dob: "Doğum Tarihi",
                    gender: "Cinsiyet",
                    city: "Şehir",
                    country: "Ülke",
                    save: "Profil Değişikliklerini Kaydet",
                    edit: "Profilimi Düzenle",
                    upload: "Fotoğraf Yükle",
                    name_ph: "Adınızı giriniz",
                    email_ph: "E-postanızı giriniz",
                    male: "Erkek",
                    female: "Kadın",
                    other: "Diğer"
                },
                auth: {
                    login: "Giriş Yap",
                    signup: "Kaydol",
                    fullName: "Ad Soyad",
                    email: "E-posta",
                    password: "Şifre",
                    createAccount: "Hesap oluştur",
                    alreadyAccount: "Zaten bir hesabınız var mı?",
                    dontHaveAccount: "Hesabınız yok mu?",
                    loginHere: "Buradan giriş yapın",
                    forgotPassword: "Şifrenizi mi unuttunuz?",
                    forgotText: "Şifrenizi mi unuttunuz?"
                },
                mySessions: {
                    title: "Gelecek Oturumlarım",
                    address: "Adres:",
                    dateTime: "Tarih ve Saat:",
                    cancel: "Oturumu İptal Et",
                    pay: "Online Öde",
                    noSessions: "Henüz gelecek bir oturumunuz yok.",
                    bookFirst: "İlk Oturumunuzu Ayarlayın",
                    session: "oturum"
                },
                blogPage: {
                    title: "Blogumuz",
                    description: "Online eğitim ve özel ders konusundaki görüşleri, ipuçlarını ve en son trendleri keşfedin",
                    continueReading: "okumaya devam et",
                    noBlogs: "Bu kategoride blog bulunamadı"
                }
            }
        }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
});

export default i18n;