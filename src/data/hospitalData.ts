export type Language = 'en' | 'hi' | 'pa';

export const hospitalData = {
  en: {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Blood Test', href: '#blood-test' },
      { name: 'Contact', href: '#contact' },
    ],
    hero: {
      title: 'Advanced Healthcare for Your Family',
      subtitle: 'Providing world-class medical services with a touch of care. Book your blood test online today.',
      cta: 'Book Blood Test',
      secondaryCta: 'Our Services',
    },
    services: {
      title: 'Our Medical Services',
      subtitle: 'We provide a wide range of medical services to ensure your health is always at its best.',
      items: [
        {
          id: 'blood-test',
          title: 'Blood Analysis',
          description: 'Comprehensive blood testing with quick and accurate results from our certified labs.',
          icon: 'Droplet',
        },
        {
          id: 'cardiology',
          title: 'Cardiology',
          description: 'Expert heart care with state-of-the-art diagnostic and treatment facilities.',
          icon: 'HeartPulse',
        },
        {
          id: 'pediatrics',
          title: 'Pediatrics',
          description: 'Specialized care for infants, children, and adolescents in a friendly environment.',
          icon: 'Baby',
        },
        {
          id: 'emergency',
          title: '24/7 Emergency',
          description: 'Round-the-clock emergency services with a dedicated team of trauma experts.',
          icon: 'Stethoscope',
        },
      ]
    },
    bloodTest: {
      title: 'Apply for Blood Test',
      description: 'Fill out the form below to schedule your blood test. We offer home collection and express reporting.',
      features: [
        'Home Sample Collection',
        'Results within 24 Hours',
        'Automated Digital Reports',
        'Certified Pathologists'
      ],
      form: {
        name: 'Full Name',
        phone: 'Phone Number',
        email: 'Email Address (Optional)',
        testType: 'Select Test Type',
        date: 'Preferred Date',
        placeholderName: 'John Doe',
        placeholderPhone: '+1 234 567 8900',
        placeholderEmail: 'john@example.com',
        placeholderSelect: 'Choose a test...',
        submit: 'Submit Application',
        processing: 'Processing...',
        successTitle: 'Application Received!',
        successSubtitle: 'Our team will contact you shortly to confirm your appointment.',
        applyAgain: 'Apply for Another'
      }
    },
    bloodTestTypes: [
      { id: 'complete-blood-count', name: 'Complete Blood Count (CBC)' },
      { id: 'lipid-panel', name: 'Lipid Panel' },
      { id: 'blood-glucose', name: 'Blood Glucose Test' },
      { id: 'thyroid-function', name: 'Thyroid Function Test' },
      { id: 'liver-function', name: 'Liver Function Test' },
      { id: 'vitamin-d', name: 'Vitamin D Test' },
    ],
    footer: {
      tagline: 'Redefining healthcare with technology and compassion.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      address: '123 Medical Plaza, Health City, HC 45678',
      phone: '+1 (555) 000-0000',
      email: 'info@carepulse.com',
      rights: 'CarePulse Hospital System. All rights reserved.',
      socials: [
        { name: 'Facebook', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'LinkedIn', href: '#' },
      ],
    },
  },
  hi: {
    navigation: [
      { name: 'होम', href: '/' },
      { name: 'हमारे बारे में', href: '#about' },
      { name: 'सेवाएं', href: '#services' },
      { name: 'रक्त परीक्षण', href: '#blood-test' },
      { name: 'संपर्क करें', href: '#contact' },
    ],
    hero: {
      title: 'आपके परिवार के लिए उन्नत स्वास्थ्य सेवा',
      subtitle: 'देखभाल के साथ विश्व स्तरीय चिकित्सा सेवाएं प्रदान करना। आज ही अपना ब्लड टेस्ट ऑनलाइन बुक करें।',
      cta: 'ब्लड टेस्ट बुक करें',
      secondaryCta: 'हमारी सेवाएं',
    },
    services: {
      title: 'हमारी चिकित्सा सेवाएं',
      subtitle: 'हम यह सुनिश्चित करने के लिए चिकित्सा सेवाओं की एक विस्तृत श्रृंखला प्रदान करते हैं कि आपका स्वास्थ्य हमेशा बेहतर रहे।',
      items: [
        {
          id: 'blood-test',
          title: 'रक्त विश्लेषण',
          description: 'हमारी प्रमाणित प्रयोगशालाओं से त्वरित और सटीक परिणामों के साथ व्यापक रक्त परीक्षण।',
          icon: 'Droplet',
        },
        {
          id: 'cardiology',
          title: 'कार्डियोलॉजी',
          description: 'अत्याधुनिक नैदानिक और उपचार सुविधाओं के साथ विशेषज्ञ हृदय देखभाल।',
          icon: 'HeartPulse',
        },
        {
          id: 'pediatrics',
          title: 'बाल रोग',
          description: 'अनुकूल वातावरण में शिशुओं, बच्चों और किशोरों के लिए विशेष देखभाल।',
          icon: 'Baby',
        },
        {
          id: 'emergency',
          title: '24/7 आपातकालीन',
          description: 'आघात विशेषज्ञों की एक समर्पित टीम के साथ चौबीसों घंटे आपातकालीन सेवाएं।',
          icon: 'Stethoscope',
        },
      ]
    },
    bloodTest: {
      title: 'रक्त परीक्षण के लिए आवेदन करें',
      description: 'अपने रक्त परीक्षण को शेड्यूल करने के लिए नीचे दिया गया फॉर्म भरें। हम होम कलेक्शन और एक्सप्रेस रिपोर्टिंग प्रदान करते हैं।',
      features: [
        'घर से सैंपल कलेक्शन',
        '24 घंटे के भीतर परिणाम',
        'स्वचालित डिजिटल रिपोर्ट',
        'प्रमाणित रोगविज्ञानी'
      ],
      form: {
        name: 'पूरा नाम',
        phone: 'फ़ोन नंबर',
        email: 'ईमेल पता (वैकल्पिक)',
        testType: 'परीक्षण प्रकार चुनें',
        date: 'पसंदीदा तिथि',
        placeholderName: 'जॉन डो',
        placeholderPhone: '+91 00000 00000',
        placeholderEmail: 'john@example.com',
        placeholderSelect: 'एक परीक्षण चुनें...',
        submit: 'आवेदन जमा करें',
        processing: 'प्रगति पर है...',
        successTitle: 'आवेदन प्राप्त हुआ!',
        successSubtitle: 'हमारी टीम आपकी नियुक्ति की पुष्टि करने के लिए आपसे शीघ्र ही संपर्क करेगी।',
        applyAgain: 'एक और आवेदन करें'
      }
    },
    bloodTestTypes: [
      { id: 'complete-blood-count', name: 'पूर्ण रक्त गणना (CBC)' },
      { id: 'lipid-panel', name: 'लिपिड प्रोफाइल' },
      { id: 'blood-glucose', name: 'ब्लड ग्लूकोज टेस्ट' },
      { id: 'thyroid-function', name: 'थायराइड फंक्शन टेस्ट' },
      { id: 'liver-function', name: 'लिवर फंक्शन टेस्ट' },
      { id: 'vitamin-d', name: 'विटामिन डी टेस्ट' },
    ],
    footer: {
      tagline: 'प्रौद्योगिकी और करुणा के साथ स्वास्थ्य सेवा को फिर से परिभाषित करना।',
      quickLinks: 'त्वरित लिंक',
      contactUs: 'संपर्क करें',
      followUs: 'हमारा अनुसरण करें',
      address: '123 मेडिकल प्लाजा, हेल्थ सिटी, HC 45678',
      phone: '+1 (555) 000-0000',
      email: 'info@carepulse.com',
      rights: 'CarePulse अस्पताल प्रणाली। सर्वाधिकार सुरक्षित।',
      socials: [
        { name: 'फेसबुक', href: '#' },
        { name: 'ट्विटर', href: '#' },
        { name: 'लिंक्डइन', href: '#' },
      ],
    },
  },
  pa: {
    navigation: [
      { name: 'ਹੋਮ', href: '/' },
      { name: 'ਬਾਰੇ', href: '#about' },
      { name: 'ਸੇਵਾਵਾਂ', href: '#services' },
      { name: 'ਬਲੱਡ ਟੈਸਟ', href: '#blood-test' },
      { name: 'ਸੰਪਰਕ', href: '#contact' },
    ],
    hero: {
      title: 'ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਲਈ ਉੱਨਤ ਸਿਹਤ ਸੇਵਾ',
      subtitle: 'ਦੇਖਭਾਲ ਦੇ ਨਾਲ ਵਿਸ਼ਵ ਪੱਧਰੀ ਡਾਕਟਰੀ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਨਾ। ਅੱਜ ਹੀ ਆਪਣਾ ਬਲੱਡ ਟੈਸਟ ਆਨਲਾਈਨ ਬੁੱਕ ਕਰੋ।',
      cta: 'ਬਲੱਡ ਟੈਸਟ ਬੁੱਕ ਕਰੋ',
      secondaryCta: 'ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ',
    },
    services: {
      title: 'ਸਾਡੀਆਂ ਡਾਕਟਰੀ ਸੇਵਾਵਾਂ',
      subtitle: 'ਅਸੀਂ ਇਹ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਡਾਕਟਰੀ ਸੇਵਾਵਾਂ ਦੀ ਇੱਕ ਵਿਸ਼ਾਲ ਸ਼੍ਰੇਣੀ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਾਂ ਕਿ ਤੁਹਾਡੀ ਸਿਹਤ ਹਮੇਸ਼ਾ ਵਧੀਆ ਰਹੇ।',
      items: [
        {
          id: 'blood-test',
          title: 'ਖੂਨ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ',
          description: 'ਸਾਡੀਆਂ ਪ੍ਰਮਾਣਿਤ ਪ੍ਰਯੋਗਸ਼ਾਲਾਵਾਂ ਤੋਂ ਤੁਰੰਤ ਅਤੇ ਸਹੀ ਨਤੀਜਿਆਂ ਦੇ ਨਾਲ ਵਿਆਪਕ ਖੂਨ ਦੀ ਜਾਂਚ।',
          icon: 'Droplet',
        },
        {
          id: 'cardiology',
          title: 'ਕਾਰਡੀਓਲੋਜੀ',
          description: 'ਆਧੁਨਿਕ ਡਾਇਗਨੌਸਟਿਕ ਅਤੇ ਇਲਾਜ ਸਹੂਲਤਾਂ ਦੇ ਨਾਲ ਮਾਹਰ ਦਿਲ ਦੀ ਦੇਖਭਾਲ।',
          icon: 'HeartPulse',
        },
        {
          id: 'pediatrics',
          title: 'ਬਾਲ ਰੋਗ',
          description: 'ਅਨੁਕੂਲ ਵਾਤਾਵਰਣ ਵਿੱਚ ਨਿਆਣਿਆਂ, ਬੱਚਿਆਂ ਅਤੇ ਕਿਸ਼ੋਰਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਦੇਖਭਾਲ।',
          icon: 'Baby',
        },
        {
          id: 'emergency',
          title: '24/7 ਐਮਰਜੈਂਸੀ',
          description: 'ਟਰਾਮਾ ਮਾਹਰਾਂ ਦੀ ਇੱਕ ਸਮਰਪਿਤ ਟੀਮ ਨਾਲ ਚੌਵੀ ਘੰਟੇ ਐਮਰਜੈਂਸੀ ਸੇਵਾਵਾਂ।',
          icon: 'Stethoscope',
        },
      ]
    },
    bloodTest: {
      title: 'ਬਲੱਡ ਟੈਸਟ ਲਈ ਅਪਲਾਈ ਕਰੋ',
      description: 'ਆਪਣੇ ਬਲੱਡ ਟੈਸਟ ਨੂੰ ਤਹਿ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤਾ ਫਾਰਮ ਭਰੋ। ਅਸੀਂ ਹੋਮ ਕਲੈਕਸ਼ਨ ਅਤੇ ਐਕਸਪ੍ਰੈਸ ਰਿਪੋਰਟਿੰਗ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦੇ ਹਾਂ।',
      features: [
        'ਘਰ ਤੋਂ ਸੈਂਪਲ ਕਲੈਕਸ਼ਨ',
        '24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਨਤੀਜੇ',
        'ਆਟੋਮੇਟਿਡ ਡਿਜੀਟਲ ਰਿਪੋਰਟਾਂ',
        'ਪ੍ਰਮਾਣਿਤ ਪੈਥੋਲੋਜਿਸਟ'
      ],
      form: {
        name: 'ਪੂਰਾ ਨਾਮ',
        phone: 'ਫ਼ੋਨ ਨੰਬਰ',
        email: 'ਈਮੇਲ ਪਤਾ (ਵਿਕਲਪਿਕ)',
        testType: 'ਟੈਸਟ ਦੀ ਕਿਸਮ ਚੁਣੋ',
        date: 'ਪਸੰਦੀਦਾ ਮਿਤੀ',
        placeholderName: 'ਜੌਨ ਡੋ',
        placeholderPhone: '+91 00000 00000',
        placeholderEmail: 'john@example.com',
        placeholderSelect: 'ਇੱਕ ਟੈਸਟ ਚੁਣੋ...',
        submit: 'ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਕਰੋ',
        processing: 'ਕਾਰਵਾਈ ਚੱਲ ਰਹੀ ਹੈ...',
        successTitle: 'ਅਰਜ਼ੀ ਪ੍ਰਾਪਤ ਹੋਈ!',
        successSubtitle: 'ਸਾਡੀ ਟੀਮ ਤੁਹਾਡੀ ਨਿਯੁਕਤੀ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਲਈ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇਗੀ।',
        applyAgain: 'ਹੋਰ ਲਈ ਅਪਲਾਈ ਕਰੋ'
      }
    },
    bloodTestTypes: [
      { id: 'complete-blood-count', name: 'ਪੂਰੀ ਖੂਨ ਦੀ ਗਿਣਤੀ (CBC)' },
      { id: 'lipid-panel', name: 'ਲਿਪਿਡ ਪੈਨਲ' },
      { id: 'blood-glucose', name: 'ਬਲੱਡ ਗਲੂਕੋਜ਼ ਟੈਸਟ' },
      { id: 'thyroid-function', name: 'ਥਾਇਰਾਇਡ ਫੰਕਸ਼ਨ ਟੈਸਟ' },
      { id: 'liver-function', name: 'ਲੀਵਰ ਫੰਕਸ਼ਨ ਟੈਸਟ' },
      { id: 'vitamin-d', name: 'ਵਿਟਾਮਿਨ ਡੀ ਟੈਸਟ' },
    ],
    footer: {
      tagline: 'ਤਕਨਾਲੋਜੀ ਅਤੇ ਹਮਦਰਦੀ ਨਾਲ ਸਿਹਤ ਸੰਭਾਲ ਨੂੰ ਮੁੜ ਪਰਿਭਾਸ਼ਿਤ ਕਰਨਾ।',
      quickLinks: 'ਤੇਜ਼ ਲਿੰਕ',
      contactUs: 'ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
      followUs: 'ਸਾਡਾ ਪਾਲਣ ਕਰੋ',
      address: '123 ਮੈਡੀਕਲ ਪਲਾਜ਼ਾ, ਹੈਲਥ ਸਿਟੀ, HC 45678',
      phone: '+1 (555) 000-0000',
      email: 'info@carepulse.com',
      rights: 'CarePulse ਹਸਪਤਾਲ ਪ੍ਰਣਾਲੀ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।',
      socials: [
        { name: 'ਫੇਸਬੁੱਕ', href: '#' },
        { name: 'ਟਵਿੱਟਰ', href: '#' },
        { name: 'ਲਿੰਕਡਇਨ', href: '#' },
      ],
    },
  },
};
