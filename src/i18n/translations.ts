export type Language = "en" | "hi";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      roadmap: "Roadmap",
      contact: "Contact",
      joinTelegram: "Join Telegram",
    },
    hero: {
      badge: "Coming Soon — Q3 2025",
      title: "Play Games.",
      titleAccent: "Earn Rewards.",
      titleEnd: "Dominate.",
      subtitle:
        "The next-generation Telegram gaming platform where every match, task, and referral earns you real rewards. Join thousands of players on the waitlist.",
      ctaJoin: "Join on Telegram",
      ctaNotify: "Notify Me",
      ctaWatchTrailer: "Watch Trailer",
      stats: {
        waitlist: "Waitlist",
        games: "Games Planned",
        rewards: "Daily Rewards",
        countries: "Countries",
      },
    },
    features: {
      title: "Everything You Need to Win",
      subtitle:
        "Ludzo combines the best of gaming, social, and rewards into one powerful Telegram mini app.",
      items: {
        multiplayer: {
          title: "Multiplayer Games",
          description:
            "Challenge players worldwide in real-time matches. From casual puzzles to high-stakes tournaments — every game is a new adventure.",
        },
        tasks: {
          title: "Tasks & Rewards",
          description:
            "Complete daily missions, social tasks, and special challenges to earn coins. Stay active and watch your balance grow every day.",
        },
        referral: {
          title: "Referral System",
          description:
            "Invite your friends and earn a percentage of their rewards forever. Build your squad, grow your earnings exponentially.",
        },
        leaderboard: {
          title: "Leaderboards",
          description:
            "Climb the global and weekly rankings. Compete for the top spot and earn exclusive prizes for elite players.",
        },
        wallet: {
          title: "Secure Wallet",
          description:
            "Your earned coins are stored securely in your Ludzo wallet. Track earnings, spending, and upcoming withdrawal options.",
        },
        miniapp: {
          title: "Telegram Mini App",
          description:
            "No downloads required. Launch Ludzo directly inside Telegram for an ultra-fast, seamless gaming experience on any device.",
        },
      },
    },
    about: {
      title: "What is Ludzo?",
      paragraph1:
        "Ludzo is a next-generation Telegram gaming platform that combines multiplayer games, tasks, rewards, referrals, and community engagement in one seamless experience.",
      paragraph2:
        "Players can compete in exciting matches, complete daily activities, earn virtual coins, and climb the leaderboards. Built as a Telegram Mini App, Ludzo delivers a fast, secure, and entertaining gaming experience for users worldwide.",
      paragraph3:
        "We believe gaming should be accessible, rewarding, and social — which is why we built Ludzo where your audience already is: inside Telegram.",
    },
    why: {
      title: "Why Choose Ludzo?",
      subtitle:
        "We didn't just build another game. We built an ecosystem.",
      items: [
        {
          title: "Zero Friction Entry",
          description:
            "No app downloads, no registrations. Play directly inside Telegram in seconds.",
        },
        {
          title: "Real Reward Economy",
          description:
            "Every action earns coins. Tasks, games, referrals — a thriving in-game economy.",
        },
        {
          title: "Community First",
          description:
            "Built for groups, clans, and communities. Compete with friends, not strangers.",
        },
        {
          title: "Fair & Transparent",
          description:
            "Open leaderboards, verifiable reward calculations, and no pay-to-win mechanics.",
        },
        {
          title: "Always Evolving",
          description:
            "New games, tasks, and features drop regularly. There's always something new to play.",
        },
        {
          title: "Global & Inclusive",
          description:
            "Designed for players worldwide with multilingual support and regional leaderboards.",
        },
      ],
    },
    stats: {
      title: "Growing Fast",
      subtitle: "Ludzo is building momentum before even launching.",
      items: [
        { value: 12000, label: "Waitlist Members", suffix: "+" },
        { value: 6, label: "Games at Launch", suffix: "" },
        { value: 99, label: "Uptime Guaranteed", suffix: "%" },
        { value: 50, label: "Countries Represented", suffix: "+" },
      ],
    },
    roadmap: {
      title: "The Road to Launch",
      subtitle: "Our clear path from development to global launch.",
      phases: [
        {
          phase: "Phase 01",
          title: "Foundation",
          period: "Q1 2025",
          status: "completed",
          items: [
            "Core platform architecture",
            "Telegram Bot integration",
            "User wallet system",
            "Basic game engine",
          ],
        },
        {
          phase: "Phase 02",
          title: "Beta Build",
          period: "Q2 2025",
          status: "completed",
          items: [
            "Multiplayer game modules",
            "Task & reward engine",
            "Referral tracking system",
            "Internal beta testing",
          ],
        },
        {
          phase: "Phase 03",
          title: "Launch",
          period: "Q3 2025",
          status: "current",
          items: [
            "Public launch on Telegram",
            "Leaderboard system live",
            "Community events & tournaments",
            "Waitlist onboarding",
          ],
        },
        {
          phase: "Phase 04",
          title: "Scale",
          period: "Q4 2025",
          status: "upcoming",
          items: [
            "Wallet withdrawal options",
            "10+ games library",
            "Brand partnerships",
            "Global expansion",
          ],
        },
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Got questions? We've got answers.",
      items: [
        {
          q: "What is Ludzo?",
          a: "Ludzo is a Telegram Mini App gaming platform where you can play multiplayer games, complete tasks, earn coin rewards, and compete on leaderboards — all without leaving Telegram.",
        },
        {
          q: "Is Ludzo free to play?",
          a: "Yes! Ludzo is completely free to play. You earn rewards through gameplay, daily tasks, and referrals. There are no mandatory purchases.",
        },
        {
          q: "How do I join Ludzo?",
          a: "Simply open Telegram, search for @LudzoBot, and start playing. No registration, no app download required.",
        },
        {
          q: "When does Ludzo launch?",
          a: "Ludzo is launching in Q3 2025. Join the waitlist to be notified the moment we go live and get early access.",
        },
        {
          q: "Can I withdraw my earned coins?",
          a: "Withdrawal options are planned for Phase 4 (Q4 2025). We're building the infrastructure to make this secure and seamless.",
        },
        {
          q: "How does the referral system work?",
          a: "Share your unique referral link. When friends join and play, you earn a percentage of their coin earnings automatically — forever.",
        },
        {
          q: "Is Ludzo available on mobile and desktop?",
          a: "Since Ludzo runs as a Telegram Mini App, it works wherever Telegram works — iOS, Android, and desktop.",
        },
        {
          q: "How do I contact support?",
          a: "Reach us at support@selixo.in or join our official Telegram channel for announcements and community support.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Have a question, partnership inquiry, or feedback? We'd love to hear from you.",
      form: {
        name: "Your Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        success: "Message sent! We'll get back to you within 24 hours.",
        error: "Something went wrong. Please try again or email us directly.",
      },
    },
    waitlist: {
      title: "Join the Waitlist",
      subtitle:
        "Be among the first to experience Ludzo. Early members get exclusive rewards.",
      placeholder: "Enter your email address",
      submit: "Get Early Access",
      success: "You're on the list! We'll notify you at launch.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      tagline: "The future of Telegram gaming is here.",
      links: {
        product: "Product",
        company: "Company",
        legal: "Legal",
        social: "Follow Us",
      },
      copyright: "© 2025 Ludzo. All rights reserved.",
      madeWith: "Built with passion for gamers worldwide.",
    },
  },
  hi: {
    nav: {
      home: "होम",
      about: "हमारे बारे में",
      features: "फीचर्स",
      roadmap: "रोडमैप",
      contact: "संपर्क",
      joinTelegram: "टेलीग्राम जॉइन करें",
    },
    hero: {
      badge: "जल्द आ रहा है — Q3 2025",
      title: "गेम खेलें।",
      titleAccent: "रिवॉर्ड कमाएं।",
      titleEnd: "राज करें।",
      subtitle:
        "नेक्स्ट-जेनरेशन टेलीग्राम गेमिंग प्लेटफ़ॉर्म जहाँ हर मैच, टास्क और रेफरल से आप असली रिवॉर्ड कमाते हैं।",
      ctaJoin: "टेलीग्राम पर जॉइन करें",
      ctaNotify: "नोटिफाई करें",
      ctaWatchTrailer: "ट्रेलर देखें",
      stats: {
        waitlist: "वेटलिस्ट",
        games: "गेम्स प्लान्ड",
        rewards: "डेली रिवॉर्ड्स",
        countries: "देश",
      },
    },
    features: {
      title: "जीतने के लिए सब कुछ",
      subtitle:
        "Ludzo गेमिंग, सोशल और रिवॉर्ड को एक शक्तिशाली टेलीग्राम मिनी ऐप में जोड़ता है।",
      items: {
        multiplayer: {
          title: "मल्टीप्लेयर गेम्स",
          description:
            "रियल-टाइम मैच में दुनिया भर के खिलाड़ियों को चुनौती दें।",
        },
        tasks: {
          title: "टास्क और रिवॉर्ड्स",
          description:
            "डेली मिशन और चैलेंज पूरे करके कॉइन्स कमाएं।",
        },
        referral: {
          title: "रेफरल सिस्टम",
          description:
            "दोस्तों को इनवाइट करें और उनके रिवॉर्ड का हिस्सा हमेशा के लिए कमाएं।",
        },
        leaderboard: {
          title: "लीडरबोर्ड",
          description:
            "ग्लोबल रैंकिंग में चढ़ें और एक्सक्लूसिव प्राइज़ जीतें।",
        },
        wallet: {
          title: "सिक्योर वॉलेट",
          description:
            "आपके कमाए कॉइन्स सुरक्षित रूप से Ludzo वॉलेट में स्टोर होते हैं।",
        },
        miniapp: {
          title: "टेलीग्राम मिनी ऐप",
          description:
            "कोई डाउनलोड नहीं। सीधे टेलीग्राम से Ludzo लॉन्च करें।",
        },
      },
    },
    about: {
      title: "Ludzo क्या है?",
      paragraph1:
        "Ludzo एक नेक्स्ट-जेनरेशन टेलीग्राम गेमिंग प्लेटफ़ॉर्म है जो मल्टीप्लेयर गेम्स, टास्क, रिवॉर्ड और रेफरल को एक अनुभव में जोड़ता है।",
      paragraph2:
        "खिलाड़ी रोमांचक मैच में प्रतिस्पर्धा कर सकते हैं, डेली एक्टिविटी पूरी कर सकते हैं और लीडरबोर्ड पर चढ़ सकते हैं।",
      paragraph3:
        "हम मानते हैं कि गेमिंग सुलभ, पुरस्कृत और सामाजिक होनी चाहिए — इसीलिए हमने Ludzo को टेलीग्राम पर बनाया।",
    },
    why: {
      title: "Ludzo क्यों चुनें?",
      subtitle: "हमने सिर्फ एक गेम नहीं बनाया — एक इकोसिस्टम बनाया।",
      items: [
        {
          title: "जीरो फ्रिक्शन एंट्री",
          description:
            "कोई ऐप डाउनलोड नहीं, कोई रजिस्ट्रेशन नहीं। सेकंडों में खेलें।",
        },
        {
          title: "रियल रिवॉर्ड इकोनॉमी",
          description:
            "हर एक्शन पर कॉइन्स कमाएं — गेम्स, टास्क, रेफरल।",
        },
        {
          title: "कम्युनिटी फर्स्ट",
          description:
            "ग्रुप्स, क्लान्स और दोस्तों के साथ प्रतिस्पर्धा करें।",
        },
        {
          title: "फेयर और ट्रांसपेरेंट",
          description:
            "ओपन लीडरबोर्ड, वेरिफायबल रिवॉर्ड — कोई पे-टू-विन नहीं।",
        },
        {
          title: "हमेशा बदलता है",
          description:
            "नए गेम्स, टास्क और फीचर्स नियमित रूप से आते रहते हैं।",
        },
        {
          title: "ग्लोबल और इनक्लूसिव",
          description:
            "मल्टीलिंगुअल सपोर्ट और रीजनल लीडरबोर्ड के साथ दुनिया भर के खिलाड़ियों के लिए।",
        },
      ],
    },
    stats: {
      title: "तेजी से बढ़ रहा है",
      subtitle: "Ludzo लॉन्च से पहले ही मोमेंटम बना रहा है।",
      items: [
        { value: 12000, label: "वेटलिस्ट मेंबर्स", suffix: "+" },
        { value: 6, label: "लॉन्च पर गेम्स", suffix: "" },
        { value: 99, label: "अपटाइम गारंटी", suffix: "%" },
        { value: 50, label: "देशों का प्रतिनिधित्व", suffix: "+" },
      ],
    },
    roadmap: {
      title: "लॉन्च का रास्ता",
      subtitle: "डेवलपमेंट से ग्लोबल लॉन्च तक हमारा स्पष्ट पथ।",
      phases: [
        {
          phase: "फेज़ 01",
          title: "फाउंडेशन",
          period: "Q1 2025",
          status: "completed",
          items: [
            "कोर प्लेटफ़ॉर्म आर्किटेक्चर",
            "टेलीग्राम बॉट इंटीग्रेशन",
            "यूज़र वॉलेट सिस्टम",
            "बेसिक गेम इंजन",
          ],
        },
        {
          phase: "फेज़ 02",
          title: "बीटा बिल्ड",
          period: "Q2 2025",
          status: "completed",
          items: [
            "मल्टीप्लेयर गेम मॉड्यूल",
            "टास्क और रिवॉर्ड इंजन",
            "रेफरल ट्रैकिंग सिस्टम",
            "इंटर्नल बीटा टेस्टिंग",
          ],
        },
        {
          phase: "फेज़ 03",
          title: "लॉन्च",
          period: "Q3 2025",
          status: "current",
          items: [
            "टेलीग्राम पर पब्लिक लॉन्च",
            "लीडरबोर्ड सिस्टम लाइव",
            "कम्युनिटी इवेंट्स और टूर्नामेंट",
            "वेटलिस्ट ऑनबोर्डिंग",
          ],
        },
        {
          phase: "फेज़ 04",
          title: "स्केल",
          period: "Q4 2025",
          status: "upcoming",
          items: [
            "वॉलेट विदड्रॉल ऑप्शन",
            "10+ गेम्स लाइब्रेरी",
            "ब्रांड पार्टनरशिप",
            "ग्लोबल एक्सपेंशन",
          ],
        },
      ],
    },
    faq: {
      title: "अक्सर पूछे जाने वाले सवाल",
      subtitle: "सवाल हैं? हमारे पास जवाब हैं।",
      items: [
        {
          q: "Ludzo क्या है?",
          a: "Ludzo एक टेलीग्राम मिनी ऐप गेमिंग प्लेटफ़ॉर्म है जहाँ आप मल्टीप्लेयर गेम्स खेल सकते हैं, टास्क पूरे कर सकते हैं और रिवॉर्ड कमा सकते हैं।",
        },
        {
          q: "क्या Ludzo मुफ़्त है?",
          a: "हाँ! Ludzo पूरी तरह से मुफ़्त है। गेमप्ले, डेली टास्क और रेफरल से रिवॉर्ड कमाएं।",
        },
        {
          q: "Ludzo कैसे जॉइन करें?",
          a: "टेलीग्राम खोलें, @LudzoBot सर्च करें और खेलना शुरू करें। कोई रजिस्ट्रेशन नहीं।",
        },
        {
          q: "Ludzo कब लॉन्च होगा?",
          a: "Ludzo Q3 2025 में लॉन्च होगा। वेटलिस्ट जॉइन करें और अर्ली एक्सेस पाएं।",
        },
        {
          q: "क्या मैं कॉइन्स विदड्रॉ कर सकता हूँ?",
          a: "विदड्रॉल ऑप्शन फेज़ 4 (Q4 2025) में आएंगे।",
        },
        {
          q: "रेफरल सिस्टम कैसे काम करता है?",
          a: "अपना यूनीक रेफरल लिंक शेयर करें और दोस्तों की कमाई का हिस्सा हमेशा के लिए पाएं।",
        },
        {
          q: "क्या यह मोबाइल पर काम करता है?",
          a: "हाँ! Ludzo टेलीग्राम मिनी ऐप है, इसलिए iOS, Android और डेस्कटॉप पर काम करता है।",
        },
        {
          q: "सपोर्ट से कैसे संपर्क करें?",
          a: "support@selixo.in पर ईमेल करें या हमारे टेलीग्राम चैनल से जुड़ें।",
        },
      ],
    },
    contact: {
      title: "संपर्क करें",
      subtitle:
        "कोई सवाल, पार्टनरशिप इंक्वायरी या फीडबैक? हम सुनना चाहते हैं।",
      form: {
        name: "आपका नाम",
        email: "ईमेल पता",
        subject: "विषय",
        message: "आपका संदेश",
        submit: "संदेश भेजें",
        success: "संदेश भेज दिया! हम 24 घंटे में जवाब देंगे।",
        error: "कुछ गलत हुआ। कृपया पुनः प्रयास करें।",
      },
    },
    waitlist: {
      title: "वेटलिस्ट जॉइन करें",
      subtitle:
        "Ludzo अनुभव करने वाले पहले लोगों में शामिल हों। अर्ली मेंबर्स को एक्सक्लूसिव रिवॉर्ड मिलेंगे।",
      placeholder: "अपना ईमेल पता दर्ज करें",
      submit: "अर्ली एक्सेस पाएं",
      success: "आप लिस्ट में हैं! लॉन्च पर हम आपको नोटिफाई करेंगे।",
      error: "कुछ गलत हुआ। कृपया पुनः प्रयास करें।",
    },
    footer: {
      tagline: "टेलीग्राम गेमिंग का भविष्य यहाँ है।",
      links: {
        product: "प्रोडक्ट",
        company: "कंपनी",
        legal: "लीगल",
        social: "हमें फॉलो करें",
      },
      copyright: "© 2025 Ludzo. सर्वाधिकार सुरक्षित।",
      madeWith: "दुनिया भर के गेमर्स के लिए जुनून से बनाया गया।",
    },
  },
};

export type TranslationKeys = typeof translations.en;
