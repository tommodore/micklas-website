export type Locale =
	| "de"
	| "en"
	| "fr"
	| "it"
	| "es"
	| "pt"
	| "da"
	| "sv"
	| "no"
	| "me";

type TranslationDict = Record<string, string>;

// Namespace-based translations: key → translated string per locale
const translations: Record<Locale, TranslationDict> = {
	de: {
		// Nav
		"nav.about": "Über mich",
		"nav.travels": "Reisen",
		"nav.journal": "Journal",
		"nav.collaborate": "Kooperation",
		"nav.impressum": "Impressum",
		"nav.privacy": "Datenschutz",
		"nav.merch": "Shop",
		"nav.trainings": "Trainings",
		"nav.pictures": "Bilder",

		// Merch page
		"merch.title": "Merchandise Shop",
		"merch.subtitle":
			"Trage Micklas – exklusive Kollektionen für echte Abenteurer.",
		"merch.cta": "Zum Shop",

		// Trainings page
		"trainings.title": "Trainings & Buchung",
		"trainings.subtitle": "Professionelle Fotografie-Trainings und Workshops.",
		"trainings.cta": "Jetzt buchen",

		// Pictures page
		"pictures.title": "Meine Bilder",
		"pictures.subtitle": "Lizenzierte Reisefotografie für dein Projekt.",
		"pictures.cta": "Bilder anfragen",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Reisefotografie • 120k+ Community",
		"hero.description": "Ihr Partner für Social Media Werbung",
		"hero.cta.about": "Micklas kennenlernen",
		"hero.cta.collaborate": "Jetzt kooperieren",
		"hero.scroll": "SCROLLEN ZUM ENTDECKEN",

		// Stats
		"stats.followers": "Instagram Follower",
		"stats.countries": "Besuchte Länder",
		"stats.stories": "Reisegeschichten",
		"stats.languages": "Sprachen",

		// Featured travels
		"featured.badge": "REISEZIELE",
		"featured.title": "Ausgewählte Reisen",
		"featured.subtitle": "Entdecke Micklas' unvergesslichste Reisen",
		"featured.read": "Die ganze Geschichte lesen →",
		"featured.all": "Alle Reiseziele entdecken →",

		// Testimonials
		"testimonials.badge": "REFERENZEN",
		"testimonials.title":
			"Das sagen Marken über die Zusammenarbeit mit Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Folge @micklas auf Instagram",
		"instagram.subtitle": "Aktuelle Momente von meinen Reisen",
		"instagram.follow": "@micklas auf Instagram",
		"instagram.caption": "Folge für tägliche Reiseinspiration",

		// CTA
		"cta.title": "Bereit für eine Zusammenarbeit?",
		"cta.description":
			"Ob Marke, Tourismusverband oder Hotel — lass uns gemeinsam etwas Schönes schaffen.",
		"cta.button": "Gespräch beginnen",

		// About
		"about.badge": "ÜBER MICH",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Reisefotograf, Geschichtenerzähler und Creator mit Leidenschaft für authentische Erlebnisse und epische Landschaften.",
		"about.p1":
			"Hallo, ich bin Michael — bekannt als <strong>Micklas</strong> für meine 120k+ Instagram-Community. Ich bin Reisefotograf und Content Creator, der über 40 Länder auf allen Kontinenten erkundet hat.",
		"about.p2":
			"Meine Arbeit verbindet Abenteuer und Ästhetik. Von der Mitternachtssonne der Lofoten bis zu den alten Medinas Marokkos — ich halte die Welt so fest, wie ich sie sehe: ehrlich, dramatisch und voller Wunder.",
		"about.p3":
			"Neben meinen eigenen Plattformen arbeite ich mit Tourismusverbänden, Hotels und Lifestyle-Marken zusammen, um visuelle Geschichten zu schaffen, die moderne Reisende begeistern.",
		"about.p4":
			"Jedes Foto erzählt eine Geschichte — aber die besten laden dich ein, Teil davon zu werden. Ob durch meine Linse oder durch eine Partnerschaft, ich bin hier, um diese Geschichten unvergesslich zu machen.",
		"about.stats.countries": "Länder",
		"about.stats.followers": "Follower",
		"about.stats.languages": "Sprachen",
		"about.cta": "Mit Micklas arbeiten",

		// Travels
		"travels.badge": "PORTFOLIO",
		"travels.title": "Reisen",
		"travels.subtitle":
			"Eine visuelle Reise durch einige der atemberaubendsten Orte der Welt.",
		"travels.filter.all": "Alle",
		"travels.empty": "Keine Reiseziele für die ausgewählten Filter gefunden.",
		"travels.footer":
			"Dieses Portfolio wächst stetig. Weitere Reiseziele werden regelmäßig hinzugefügt.",

		// Journal
		"journal.badge": "REISEJOURNAL",
		"journal.title": "Geschichten von unterwegs",
		"journal.subtitle":
			"Momente hinter den Kulissen, Reisetipps und ehrliche Reflexionen von meinen Reisen um die Welt.",
		"journal.empty":
			"Noch keine veröffentlichten Geschichten. Schau bald wieder vorbei!",
		"journal.read": "Die ganze Geschichte lesen →",
		"journal.back": "← Zurück zum Journal",

		// Collaborate
		"collaborate.badge": "LASS UNS GROSSES SCHAFFEN",
		"collaborate.title": "Mit Micklas kooperieren",
		"collaborate.subtitle":
			"Ob Marke, Tourismusverband, Hotel oder Agentur — wir freuen uns von dir zu hören.",
		"collaborate.name": "Dein Name *",
		"collaborate.email": "E-Mail-Adresse *",
		"collaborate.company": "Unternehmen / Organisation",
		"collaborate.message": "Erzähl uns von deinem Projekt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@marke.de",
		"collaborate.placeholder.company": "Deine Marke oder Tourismusverband",
		"collaborate.placeholder.message":
			"Wir suchen einen Reisefotografen für unsere Sommerkampagne in den Alpen...",
		"collaborate.consent":
			"Ich stimme zu, dass meine Daten (Name, E-Mail, Unternehmen, Nachricht) von Micklas Travels verarbeitet werden, um meine Anfrage zu beantworten. Die Daten werden maximal 6 Monate gespeichert und nicht an Dritte weitergegeben. Ich kann diese Einwilligung jederzeit per E-Mail an hello@micklas.travel widerrufen.",
		"collaborate.privacy": "Für weitere Informationen lies bitte unsere",
		"collaborate.submit": "Nachricht senden",
		"collaborate.sending": "Nachricht wird gesendet...",
		"collaborate.success.title": "Vielen Dank!",
		"collaborate.success.text":
			"Deine Nachricht ist angekommen. Micklas wird sich innerhalb von 48 Stunden bei dir melden.",
		"collaborate.success.back": "Zurück zur Startseite",
		"collaborate.gdpr":
			"Dieses Formular ist DSGVO-konform. Deine Daten werden vertraulich behandelt.",
		"collaborate.error.consent":
			"Bitte akzeptiere die Datenverarbeitungsvereinbarung, um fortzufahren.",

		// Footer
		"footer.rights": "Alle Rechte vorbehalten.",
		"footer.tagline": "Mit ❤️ für die Reise-Community gebaut.",

		// Impressum
		"impressum.title": "Impressum",
		"impressum.subtitle": "Angaben gemäß §5 TMG (German Telemedia Act)",

		// Privacy
		"privacy.title": "Datenschutzerklärung",
		"privacy.subtitle": "Privacy Policy / Datenschutzerklärung gemäß DSGVO",
	},
	en: {
		"nav.about": "About",
		"nav.travels": "Travels",
		"nav.journal": "Journal",
		"nav.collaborate": "Collaborate",
		"nav.impressum": "Impressum",
		"nav.privacy": "Privacy Policy",
		"nav.merch": "Shop",
		"nav.trainings": "Trainings",
		"nav.pictures": "Pictures",

		// Merch page
		"merch.title": "Merchandise Shop",
		"merch.subtitle":
			"Wear Micklas – exclusive collections for true adventurers.",
		"merch.cta": "Visit Shop",

		// Trainings page
		"trainings.title": "Trainings & Booking",
		"trainings.subtitle": "Professional photography trainings and workshops.",
		"trainings.cta": "Book Now",

		// Pictures page
		"pictures.title": "Get My Pictures",
		"pictures.subtitle": "Licensed travel photography for your project.",
		"pictures.cta": "Request Images",

		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Travel Photography • 120k+ Community",
		"hero.description": "Your Partner for Social Media Advertising",
		"hero.cta.about": "Meet Micklas",
		"hero.cta.collaborate": "Collaborate with Us",
		"hero.scroll": "SCROLL TO EXPLORE",

		"stats.followers": "Instagram Followers",
		"stats.countries": "Countries Visited",
		"stats.stories": "Travel Stories",
		"stats.languages": "Languages",

		"featured.badge": "DESTINATIONS",
		"featured.title": "Featured Travels",
		"featured.subtitle": "Discover some of Micklas' most memorable journeys",
		"featured.read": "Read the full story →",
		"featured.all": "Explore all destinations →",

		"testimonials.badge": "TESTIMONIALS",
		"testimonials.title": "What brands say about working with Micklas",

		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Follow @micklas on Instagram",
		"instagram.subtitle": "Latest moments from my travels",
		"instagram.follow": "@micklas on Instagram",
		"instagram.caption": "Follow for daily travel inspiration",

		"cta.title": "Ready to work together?",
		"cta.description":
			"Whether you're a brand, tourism board, or hotel — let's create something beautiful.",
		"cta.button": "Start a Conversation",

		"about.badge": "ABOUT",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Travel photographer, storyteller, and creator with a passion for authentic experiences and epic landscapes.",
		"about.p1":
			"Hi, I'm Michael — known as <strong>Micklas</strong> to my 120k+ Instagram community. I'm a travel photographer and content creator who has explored over 40 countries across every continent.",
		"about.p2":
			"My work lives at the intersection of adventure and aesthetics. From the midnight sun of the Lofoten Islands to the ancient medinas of Morocco, I capture the world as I see it — honest, dramatic, and full of wonder.",
		"about.p3":
			"Beyond creating content for my own platforms, I partner with tourism boards, hotels, and lifestyle brands to create visual stories that resonate with modern travelers.",
		"about.p4":
			"Every photograph tells a story — but the best ones invite you to become part of it. Whether through my lens or through a partnership, I'm here to make those stories unforgettable.",
		"about.stats.countries": "Countries",
		"about.stats.followers": "Followers",
		"about.stats.languages": "Languages",
		"about.cta": "Work with Micklas",

		"travels.badge": "PORTFOLIO",
		"travels.title": "Travels",
		"travels.subtitle":
			"A visual journey through some of the world's most breathtaking places.",
		"travels.filter.all": "All",
		"travels.empty": "No destinations found for the selected filters.",
		"travels.footer":
			"This portfolio is growing. More destinations will be added regularly.",

		"journal.badge": "TRAVEL JOURNAL",
		"journal.title": "Stories from the Road",
		"journal.subtitle":
			"Behind-the-scenes moments, travel tips, and honest reflections from my journeys around the world.",
		"journal.empty": "No published stories yet. Check back soon!",
		"journal.read": "Read the full story →",
		"journal.back": "← Back to Journal",

		"collaborate.badge": "LET'S CREATE SOMETHING GREAT",
		"collaborate.title": "Collaborate with Micklas",
		"collaborate.subtitle":
			"Whether you're a brand, tourism board, hotel, or agency — we'd love to hear from you.",
		"collaborate.name": "Your Name *",
		"collaborate.email": "Email Address *",
		"collaborate.company": "Company / Organization",
		"collaborate.message": "Tell us about your project *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@brand.com",
		"collaborate.placeholder.company": "Your Brand or Tourism Board",
		"collaborate.placeholder.message":
			"We're looking for a travel photographer for our summer campaign in the Alps...",
		"collaborate.consent":
			"I agree that my data (name, email, company, message) will be processed by Micklas Travels to respond to my inquiry. The data will be stored for a maximum of 6 months and will not be shared with third parties. I can revoke this consent at any time by emailing hello@micklas.travel.",
		"collaborate.privacy": "For more information, please read our",
		"collaborate.submit": "Send Message",
		"collaborate.sending": "Sending your message...",
		"collaborate.success.title": "Thank you!",
		"collaborate.success.text":
			"Your message has been received. Micklas will get back to you within 48 hours.",
		"collaborate.success.back": "Back to homepage",
		"collaborate.gdpr":
			"This form is GDPR / DSGVO compliant. Your data is handled with care.",
		"collaborate.error.consent":
			"Please accept the data processing agreement to continue.",

		"footer.rights": "All rights reserved.",
		"footer.tagline": "Built with ❤️ for the travel community.",

		"impressum.title": "Impressum",
		"impressum.subtitle":
			"Legal Notice according to §5 TMG (German Telemedia Act)",

		"privacy.title": "Privacy Policy",
		"privacy.subtitle": "Data Protection Declaration according to GDPR",
	},
	fr: {
		// Nav
		"nav.about": "À propos",
		"nav.travels": "Voyages",
		"nav.journal": "Journal",
		"nav.collaborate": "Collaborer",
		"nav.impressum": "Mentions légales",
		"nav.privacy": "Confidentialité",
		"nav.merch": "Boutique",
		"nav.trainings": "Formations",
		"nav.pictures": "Photos",

		// Merch page
		"merch.title": "Boutique de goodies",
		"merch.subtitle":
			"Portez Micklas – des collections exclusives pour les vrais aventuriers.",
		"merch.cta": "Visiter la boutique",

		// Trainings page
		"trainings.title": "Formations & Réservation",
		"trainings.subtitle":
			"Formations et ateliers professionnels de photographie.",
		"trainings.cta": "Réserver maintenant",

		// Pictures page
		"pictures.title": "Mes photos",
		"pictures.subtitle":
			"Photographie de voyage sous licence pour votre projet.",
		"pictures.cta": "Demander des photos",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Photographie de voyage • 120k+ abonnés",
		"hero.description":
			"Votre partenaire pour la publicité sur les réseaux sociaux",
		"hero.cta.about": "Découvrir Micklas",
		"hero.cta.collaborate": "Collaborer maintenant",
		"hero.scroll": "FAITES DÉFILER POUR EXPLORER",

		// Stats
		"stats.followers": "Abonnés Instagram",
		"stats.countries": "Pays visités",
		"stats.stories": "Récits de voyage",
		"stats.languages": "Langues",

		// Featured travels
		"featured.badge": "DESTINATIONS",
		"featured.title": "Voyages en vedette",
		"featured.subtitle": "Découvrez les voyages les plus mémorables de Micklas",
		"featured.read": "Lire toute l'histoire →",
		"featured.all": "Explorer toutes les destinations →",

		// Testimonials
		"testimonials.badge": "TÉMOIGNAGES",
		"testimonials.title":
			"Ce que les marques disent de leur collaboration avec Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Suivez @micklas sur Instagram",
		"instagram.subtitle": "Les derniers instants de mes voyages",
		"instagram.follow": "@micklas sur Instagram",
		"instagram.caption": "Suivez pour une inspiration quotidienne de voyage",

		// CTA
		"cta.title": "Prêt à travailler ensemble ?",
		"cta.description":
			"Que vous soyez une marque, un office de tourisme ou un hôtel — créons ensemble quelque chose de beau.",
		"cta.button": "Démarrer une conversation",

		// About
		"about.badge": "À PROPOS",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Photographe de voyage, conteur et créateur passionné par les expériences authentiques et les paysages épiques.",
		"about.p1":
			"Bonjour, je suis Michael — connu sous le nom de <strong>Micklas</strong> auprès de ma communauté de 120k+ abonnés sur Instagram. Je suis photographe de voyage et créateur de contenu qui a exploré plus de 40 pays sur tous les continents.",
		"about.p2":
			"Mon travail se situe à l'intersection de l'aventure et de l'esthétique. Du soleil de minuit des îles Lofoten aux anciennes médinas du Maroc, je capture le monde tel que je le vois — honnête, dramatique et plein d'émerveillement.",
		"about.p3":
			"Au-delà de la création de contenu pour mes propres plateformes, je collabore avec des offices de tourisme, des hôtels et des marques de lifestyle pour créer des histoires visuelles qui résonnent auprès des voyageurs modernes.",
		"about.p4":
			"Chaque photographie raconte une histoire — mais les meilleures vous invitent à en faire partie. Que ce soit à travers mon objectif ou un partenariat, je suis là pour rendre ces histoires inoubliables.",
		"about.stats.countries": "Pays",
		"about.stats.followers": "Abonnés",
		"about.stats.languages": "Langues",
		"about.cta": "Travailler avec Micklas",

		// Travels
		"travels.badge": "PORTFOLIO",
		"travels.title": "Voyages",
		"travels.subtitle":
			"Un voyage visuel à travers certains des endroits les plus époustouflants du monde.",
		"travels.filter.all": "Tous",
		"travels.empty":
			"Aucune destination trouvée pour les filtres sélectionnés.",
		"travels.footer":
			"Ce portfolio s'agrandit. De nouvelles destinations seront ajoutées régulièrement.",

		// Journal
		"journal.badge": "CARNET DE VOYAGE",
		"journal.title": "Histoires de la route",
		"journal.subtitle":
			"Moments en coulisses, conseils de voyage et réflexions sincères de mes voyages autour du monde.",
		"journal.empty":
			"Aucune histoire publiée pour le moment. Revenez bientôt !",
		"journal.read": "Lire toute l'histoire →",
		"journal.back": "← Retour au journal",

		// Collaborate
		"collaborate.badge": "CRÉONS QUELQUE CHOSE DE GRAND",
		"collaborate.title": "Collaborer avec Micklas",
		"collaborate.subtitle":
			"Que vous soyez une marque, un office de tourisme, un hôtel ou une agence — nous serions ravis de vous entendre.",
		"collaborate.name": "Votre nom *",
		"collaborate.email": "Adresse e-mail *",
		"collaborate.company": "Entreprise / Organisation",
		"collaborate.message": "Parlez-nous de votre projet *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@marque.fr",
		"collaborate.placeholder.company": "Votre marque ou office de tourisme",
		"collaborate.placeholder.message":
			"Nous recherchons un photographe de voyage pour notre campagne d'été dans les Alpes...",
		"collaborate.consent":
			"J'accepte que mes données (nom, e-mail, entreprise, message) soient traitées par Micklas Travels pour répondre à ma demande. Les données seront conservées pendant 6 mois maximum et ne seront pas partagées avec des tiers. Je peux révoquer ce consentement à tout moment en envoyant un e-mail à hello@micklas.travel.",
		"collaborate.privacy": "Pour plus d'informations, veuillez lire notre",
		"collaborate.submit": "Envoyer le message",
		"collaborate.sending": "Envoi du message en cours...",
		"collaborate.success.title": "Merci !",
		"collaborate.success.text":
			"Votre message a bien été reçu. Micklas vous répondra sous 48 heures.",
		"collaborate.success.back": "Retour à l'accueil",
		"collaborate.gdpr":
			"Ce formulaire est conforme au RGPD. Vos données sont traitées avec soin.",
		"collaborate.error.consent":
			"Veuillez accepter l'accord de traitement des données pour continuer.",

		// Footer
		"footer.rights": "Tous droits réservés.",
		"footer.tagline": "Construit avec ❤️ pour la communauté des voyageurs.",

		// Impressum
		"impressum.title": "Mentions légales",
		"impressum.subtitle":
			"Informations légales conformément à l'article §5 TMG (loi allemande sur les médias)",

		// Privacy
		"privacy.title": "Politique de confidentialité",
		"privacy.subtitle":
			"Déclaration de protection des données conformément au RGPD",
	},
	it: {
		// Nav
		"nav.about": "Chi sono",
		"nav.travels": "Viaggi",
		"nav.journal": "Diario",
		"nav.collaborate": "Collabora",
		"nav.impressum": "Impressum",
		"nav.privacy": "Privacy",
		"nav.merch": "Shop",
		"nav.trainings": "Corsi",
		"nav.pictures": "Foto",

		// Merch page
		"merch.title": "Negozio di merchandising",
		"merch.subtitle":
			"Indossa Micklas – collezioni esclusive per veri avventurieri.",
		"merch.cta": "Vai al negozio",

		// Trainings page
		"trainings.title": "Corsi & Prenotazione",
		"trainings.subtitle": "Corsi e workshop professionali di fotografia.",
		"trainings.cta": "Prenota ora",

		// Pictures page
		"pictures.title": "Le mie foto",
		"pictures.subtitle":
			"Fotografia di viaggio su licenza per il tuo progetto.",
		"pictures.cta": "Richiedi foto",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Fotografia di viaggio • 120k+ community",
		"hero.description": "Il tuo partner per la pubblicità sui social media",
		"hero.cta.about": "Conosci Micklas",
		"hero.cta.collaborate": "Collabora ora",
		"hero.scroll": "SCORRI PER ESPLORARE",

		// Stats
		"stats.followers": "Follower Instagram",
		"stats.countries": "Paesi visitati",
		"stats.stories": "Storie di viaggio",
		"stats.languages": "Lingue",

		// Featured travels
		"featured.badge": "DESTINAZIONI",
		"featured.title": "Viaggi in evidenza",
		"featured.subtitle": "Scopri i viaggi più indimenticabili di Micklas",
		"featured.read": "Leggi tutta la storia →",
		"featured.all": "Esplora tutte le destinazioni →",

		// Testimonials
		"testimonials.badge": "TESTIMONIALS",
		"testimonials.title":
			"Cosa dicono i brand della collaborazione con Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Segui @micklas su Instagram",
		"instagram.subtitle": "Momenti recenti dai miei viaggi",
		"instagram.follow": "@micklas su Instagram",
		"instagram.caption": "Seguimi per ispirazione quotidiana di viaggio",

		// CTA
		"cta.title": "Pronto a lavorare insieme?",
		"cta.description":
			"Che tu sia un brand, un ente turistico o un hotel — creiamo insieme qualcosa di bello.",
		"cta.button": "Avvia una conversazione",

		// About
		"about.badge": "CHI SONO",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Fotografo di viaggio, narratore e creatore con passione per esperienze autentiche e paesaggi epici.",
		"about.p1":
			"Ciao, sono Michael — conosciuto come <strong>Micklas</strong> dalla mia community di oltre 120k su Instagram. Sono un fotografo di viaggio e content creator che ha esplorato oltre 40 paesi in tutti i continenti.",
		"about.p2":
			"Il mio lavoro vive all'incrocio tra avventura ed estetica. Dal sole di mezzanotte delle Isole Lofoten agli antichi suk del Marocco, catturo il mondo come lo vedo — onesto, drammatico e pieno di meraviglia.",
		"about.p3":
			"Oltre a creare contenuti per le mie piattaforme, collaboro con enti turistici, hotel e brand lifestyle per creare storie visive che risuonano con i viaggiatori moderni.",
		"about.p4":
			"Ogni fotografia racconta una storia — ma le migliori ti invitano a diventarne parte. Che sia attraverso il mio obiettivo o una partnership, sono qui per rendere queste storie indimenticabili.",
		"about.stats.countries": "Paesi",
		"about.stats.followers": "Follower",
		"about.stats.languages": "Lingue",
		"about.cta": "Lavora con Micklas",

		// Travels
		"travels.badge": "PORTFOLIO",
		"travels.title": "Viaggi",
		"travels.subtitle":
			"Un viaggio visivo attraverso alcuni dei luoghi più mozzafiato del mondo.",
		"travels.filter.all": "Tutti",
		"travels.empty": "Nessuna destinazione trovata per i filtri selezionati.",
		"travels.footer":
			"Questo portfolio è in crescita. Altre destinazioni verranno aggiunte regolarmente.",

		// Journal
		"journal.badge": "DIARIO DI VIAGGIO",
		"journal.title": "Storie dal mondo",
		"journal.subtitle":
			"Momenti dietro le quinte, consigli di viaggio e riflessioni sincere dai miei viaggi intorno al mondo.",
		"journal.empty": "Ancora nessuna storia pubblicata. Torna presto!",
		"journal.read": "Leggi tutta la storia →",
		"journal.back": "← Torna al diario",

		// Collaborate
		"collaborate.badge": "CREIAMO QUALCOSA DI GRANDE",
		"collaborate.title": "Collabora con Micklas",
		"collaborate.subtitle":
			"Che tu sia un brand, un ente turistico, un hotel o un'agenzia — saremo felici di sentirti.",
		"collaborate.name": "Il tuo nome *",
		"collaborate.email": "Indirizzo email *",
		"collaborate.company": "Azienda / Organizzazione",
		"collaborate.message": "Parlaci del tuo progetto *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@brand.it",
		"collaborate.placeholder.company": "Il tuo brand o ente turistico",
		"collaborate.placeholder.message":
			"Stiamo cercando un fotografo di viaggio per la nostra campagna estiva sulle Alpi...",
		"collaborate.consent":
			"Acconsento al trattamento dei miei dati (nome, email, azienda, messaggio) da parte di Micklas Travels per rispondere alla mia richiesta. I dati saranno conservati per un massimo di 6 mesi e non saranno condivisi con terze parti. Posso revocare questo consenso in qualsiasi momento inviando un'email a hello@micklas.travel.",
		"collaborate.privacy": "Per maggiori informazioni, leggi la nostra",
		"collaborate.submit": "Invia messaggio",
		"collaborate.sending": "Invio del messaggio in corso...",
		"collaborate.success.title": "Grazie!",
		"collaborate.success.text":
			"Il tuo messaggio è stato ricevuto. Micklas ti risponderà entro 48 ore.",
		"collaborate.success.back": "Torna alla home",
		"collaborate.gdpr":
			"Questo modulo è conforme al GDPR. I tuoi dati sono trattati con cura.",
		"collaborate.error.consent":
			"Accetta l'accordo sul trattamento dei dati per continuare.",

		// Footer
		"footer.rights": "Tutti i diritti riservati.",
		"footer.tagline": "Creato con ❤️ per la community dei viaggiatori.",

		// Impressum
		"impressum.title": "Impressum",
		"impressum.subtitle":
			"Note legali secondo l'articolo §5 TMG (legge tedesca sui media)",

		// Privacy
		"privacy.title": "Informativa sulla privacy",
		"privacy.subtitle": "Dichiarazione di protezione dei dati secondo il GDPR",
	},
	es: {
		// Nav
		"nav.about": "Sobre mí",
		"nav.travels": "Viajes",
		"nav.journal": "Bitácora",
		"nav.collaborate": "Colaborar",
		"nav.impressum": "Aviso legal",
		"nav.privacy": "Privacidad",
		"nav.merch": "Tienda",
		"nav.trainings": "Capacitaciones",
		"nav.pictures": "Fotos",

		// Merch page
		"merch.title": "Tienda de merchandising",
		"merch.subtitle":
			"Lleva Micklas – colecciones exclusivas para auténticos aventureros.",
		"merch.cta": "Visitar la tienda",

		// Trainings page
		"trainings.title": "Capacitaciones y Reservas",
		"trainings.subtitle":
			"Capacitaciones y talleres profesionales de fotografía.",
		"trainings.cta": "Reservar ahora",

		// Pictures page
		"pictures.title": "Mis fotos",
		"pictures.subtitle": "Fotografía de viaje con licencia para tu proyecto.",
		"pictures.cta": "Solicitar fotos",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Fotografía de viajes • 120k+ comunidad",
		"hero.description": "Tu socio para publicidad en redes sociales",
		"hero.cta.about": "Conoce a Micklas",
		"hero.cta.collaborate": "Colabora ahora",
		"hero.scroll": "DESPLÁZATE PARA EXPLORAR",

		// Stats
		"stats.followers": "Seguidores en Instagram",
		"stats.countries": "Países visitados",
		"stats.stories": "Historias de viaje",
		"stats.languages": "Idiomas",

		// Featured travels
		"featured.badge": "DESTINOS",
		"featured.title": "Viajes destacados",
		"featured.subtitle": "Descubre los viajes más inolvidables de Micklas",
		"featured.read": "Leer la historia completa →",
		"featured.all": "Explorar todos los destinos →",

		// Testimonials
		"testimonials.badge": "TESTIMONIOS",
		"testimonials.title": "Lo que las marcas dicen sobre trabajar con Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Sigue a @micklas en Instagram",
		"instagram.subtitle": "Últimos momentos de mis viajes",
		"instagram.follow": "@micklas en Instagram",
		"instagram.caption": "Sígueme para inspiración diaria de viaje",

		// CTA
		"cta.title": "¿Listo para trabajar juntos?",
		"cta.description":
			"Ya seas una marca, una oficina de turismo o un hotel — creemos algo hermoso juntos.",
		"cta.button": "Iniciar una conversación",

		// About
		"about.badge": "SOBRE MÍ",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Fotógrafo de viajes, narrador y creador con pasión por experiencias auténticas y paisajes épicos.",
		"about.p1":
			"Hola, soy Michael — conocido como <strong>Micklas</strong> por mi comunidad de más de 120k en Instagram. Soy fotógrafo de viajes y creador de contenido que ha explorado más de 40 países en todos los continentes.",
		"about.p2":
			"Mi trabajo vive en la intersección entre la aventura y la estética. Desde el sol de medianoche de las Islas Lofoten hasta las antiguas medinas de Marruecos, capturo el mundo tal como lo veo — honesto, dramático y lleno de asombro.",
		"about.p3":
			"Además de crear contenido para mis propias plataformas, colaboro con oficinas de turismo, hoteles y marcas de estilo de vida para crear historias visuales que resuenen con los viajeros modernos.",
		"about.p4":
			"Cada fotografía cuenta una historia — pero las mejores te invitan a formar parte de ella. Ya sea a través de mi lente o de una asociación, estoy aquí para hacer que esas historias sean inolvidables.",
		"about.stats.countries": "Países",
		"about.stats.followers": "Seguidores",
		"about.stats.languages": "Idiomas",
		"about.cta": "Trabaja con Micklas",

		// Travels
		"travels.badge": "PORTFOLIO",
		"travels.title": "Viajes",
		"travels.subtitle":
			"Un viaje visual a través de algunos de los lugares más impresionantes del mundo.",
		"travels.filter.all": "Todos",
		"travels.empty":
			"No se encontraron destinos para los filtros seleccionados.",
		"travels.footer":
			"Este portafolio está creciendo. Se agregarán más destinos regularmente.",

		// Journal
		"journal.badge": "BITÁCORA DE VIAJE",
		"journal.title": "Historias desde el camino",
		"journal.subtitle":
			"Momentos detrás de escena, consejos de viaje y reflexiones honestas de mis viajes alrededor del mundo.",
		"journal.empty": "Aún no hay historias publicadas. ¡Vuelve pronto!",
		"journal.read": "Leer la historia completa →",
		"journal.back": "← Volver a la bitácora",

		// Collaborate
		"collaborate.badge": "CREEMOS ALGO GRANDE",
		"collaborate.title": "Colabora con Micklas",
		"collaborate.subtitle":
			"Ya seas una marca, oficina de turismo, hotel o agencia — nos encantaría saber de ti.",
		"collaborate.name": "Tu nombre *",
		"collaborate.email": "Dirección de correo electrónico *",
		"collaborate.company": "Empresa / Organización",
		"collaborate.message": "Cuéntanos sobre tu proyecto *",
		"collaborate.placeholder.name": "Ana García",
		"collaborate.placeholder.email": "ana@marca.es",
		"collaborate.placeholder.company": "Tu marca u oficina de turismo",
		"collaborate.placeholder.message":
			"Buscamos un fotógrafo de viajes para nuestra campaña de verano en los Alpes...",
		"collaborate.consent":
			"Acepto que mis datos (nombre, correo electrónico, empresa, mensaje) sean procesados por Micklas Travels para responder a mi consulta. Los datos se almacenarán por un máximo de 6 meses y no se compartirán con terceros. Puedo revocar este consentimiento en cualquier momento enviando un correo a hello@micklas.travel.",
		"collaborate.privacy": "Para más información, lee nuestra",
		"collaborate.submit": "Enviar mensaje",
		"collaborate.sending": "Enviando tu mensaje...",
		"collaborate.success.title": "¡Gracias!",
		"collaborate.success.text":
			"Tu mensaje ha sido recibido. Micklas te responderá en un plazo de 48 horas.",
		"collaborate.success.back": "Volver al inicio",
		"collaborate.gdpr":
			"Este formulario cumple con el RGPD. Tus datos se tratan con cuidado.",
		"collaborate.error.consent":
			"Acepta el acuerdo de tratamiento de datos para continuar.",

		// Footer
		"footer.rights": "Todos los derechos reservados.",
		"footer.tagline": "Construido con ❤️ para la comunidad viajera.",

		// Impressum
		"impressum.title": "Aviso legal",
		"impressum.subtitle":
			"Información legal según el §5 TMG (Ley Alemana de Medios)",

		// Privacy
		"privacy.title": "Política de privacidad",
		"privacy.subtitle": "Declaración de protección de datos según el RGPD",
	},
	pt: {
		// Nav
		"nav.about": "Sobre mim",
		"nav.travels": "Viagens",
		"nav.journal": "Diário",
		"nav.collaborate": "Colaborar",
		"nav.impressum": "Impressum",
		"nav.privacy": "Privacidade",
		"nav.merch": "Loja",
		"nav.trainings": "Formações",
		"nav.pictures": "Fotos",

		// Merch page
		"merch.title": "Loja de Merchandising",
		"merch.subtitle":
			"Veste Micklas – coleções exclusivas para verdadeiros aventureiros.",
		"merch.cta": "Visitar a loja",

		// Trainings page
		"trainings.title": "Formações e Reservas",
		"trainings.subtitle": "Formações e workshops profissionais de fotografia.",
		"trainings.cta": "Reservar agora",

		// Pictures page
		"pictures.title": "As minhas fotos",
		"pictures.subtitle": "Fotografia de viagem licenciada para o teu projeto.",
		"pictures.cta": "Solicitar fotos",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Fotografia de viagem • 120k+ comunidade",
		"hero.description": "O teu parceiro para publicidade nas redes sociais",
		"hero.cta.about": "Conhece o Micklas",
		"hero.cta.collaborate": "Colabora agora",
		"hero.scroll": "DESLIZA PARA EXPLORAR",

		// Stats
		"stats.followers": "Seguidores no Instagram",
		"stats.countries": "Países visitados",
		"stats.stories": "Histórias de viagem",
		"stats.languages": "Idiomas",

		// Featured travels
		"featured.badge": "DESTINOS",
		"featured.title": "Viagens em destaque",
		"featured.subtitle": "Descobre as viagens mais inesquecíveis do Micklas",
		"featured.read": "Ler a história completa →",
		"featured.all": "Explorar todos os destinos →",

		// Testimonials
		"testimonials.badge": "TESTEMUNHOS",
		"testimonials.title": "O que as marcas dizem sobre trabalhar com o Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Segue @micklas no Instagram",
		"instagram.subtitle": "Momentos recentes das minhas viagens",
		"instagram.follow": "@micklas no Instagram",
		"instagram.caption": "Segue para inspiração diária de viagem",

		// CTA
		"cta.title": "Pronto para trabalharmos juntos?",
		"cta.description":
			"Sejas uma marca, entidade de turismo ou hotel — vamos criar algo bonito juntos.",
		"cta.button": "Iniciar conversa",

		// About
		"about.badge": "SOBRE MIM",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Fotógrafo de viagem, contador de histórias e criador com paixão por experiências autênticas e paisagens épicas.",
		"about.p1":
			"Olá, sou o Michael — conhecido como <strong>Micklas</strong> pela minha comunidade de mais de 120k no Instagram. Sou fotógrafo de viagem e criador de conteúdo que explorou mais de 40 países em todos os continentes.",
		"about.p2":
			"O meu trabalho vive na interseção entre aventura e estética. Desde o sol da meia-noite nas Ilhas Lofoten até às antigas medinas de Marrocos, capturo o mundo como o vejo — honesto, dramático e cheio de maravilha.",
		"about.p3":
			"Para além de criar conteúdo para as minhas próprias plataformas, colaboro com entidades de turismo, hotéis e marcas de lifestyle para criar histórias visuais que ressoam com os viajantes modernos.",
		"about.p4":
			"Cada fotografia conta uma história — mas as melhores convidam-te a fazer parte dela. Seja através da minha lente ou de uma parceria, estou aqui para tornar essas histórias inesquecíveis.",
		"about.stats.countries": "Países",
		"about.stats.followers": "Seguidores",
		"about.stats.languages": "Idiomas",
		"about.cta": "Trabalha com o Micklas",

		// Travels
		"travels.badge": "PORTFÓLIO",
		"travels.title": "Viagens",
		"travels.subtitle":
			"Uma viagem visual por alguns dos lugares mais deslumbrantes do mundo.",
		"travels.filter.all": "Todos",
		"travels.empty": "Nenhum destino encontrado para os filtros selecionados.",
		"travels.footer":
			"Este portfólio está a crescer. Mais destinos serão adicionados regularmente.",

		// Journal
		"journal.badge": "DIÁRIO DE VIAGEM",
		"journal.title": "Histórias da estrada",
		"journal.subtitle":
			"Momentos dos bastidores, dicas de viagem e reflexões honestas das minhas viagens pelo mundo.",
		"journal.empty": "Ainda não há histórias publicadas. Volta em breve!",
		"journal.read": "Ler a história completa →",
		"journal.back": "← Voltar ao diário",

		// Collaborate
		"collaborate.badge": "VAMOS CRIAR ALGO GRANDE",
		"collaborate.title": "Colabora com o Micklas",
		"collaborate.subtitle":
			"Sejas uma marca, entidade de turismo, hotel ou agência — adoraríamos ouvir-te.",
		"collaborate.name": "O teu nome *",
		"collaborate.email": "Endereço de e-mail *",
		"collaborate.company": "Empresa / Organização",
		"collaborate.message": "Conta-nos sobre o teu projeto *",
		"collaborate.placeholder.name": "Ana Silva",
		"collaborate.placeholder.email": "ana@marca.pt",
		"collaborate.placeholder.company": "A tua marca ou entidade de turismo",
		"collaborate.placeholder.message":
			"Procuramos um fotógrafo de viagem para a nossa campanha de verão nos Alpes...",
		"collaborate.consent":
			"Concordo que os meus dados (nome, e-mail, empresa, mensagem) sejam processados pela Micklas Travels para responder ao meu pedido. Os dados serão armazenados por um máximo de 6 meses e não serão partilhados com terceiros. Posso revogar este consentimento a qualquer momento enviando um e-mail para hello@micklas.travel.",
		"collaborate.privacy": "Para mais informações, lê a nossa",
		"collaborate.submit": "Enviar mensagem",
		"collaborate.sending": "A enviar a tua mensagem...",
		"collaborate.success.title": "Obrigado!",
		"collaborate.success.text":
			"A tua mensagem foi recebida. O Micklas responderá dentro de 48 horas.",
		"collaborate.success.back": "Voltar à página inicial",
		"collaborate.gdpr":
			"Este formulário está em conformidade com o RGPD. Os teus dados são tratados com cuidado.",
		"collaborate.error.consent":
			"Aceita o acordo de tratamento de dados para continuar.",

		// Footer
		"footer.rights": "Todos os direitos reservados.",
		"footer.tagline": "Construído com ❤️ para a comunidade de viajantes.",

		// Impressum
		"impressum.title": "Impressum",
		"impressum.subtitle":
			"Informação legal de acordo com o §5 TMG (Lei Alemã de Meios de Comunicação)",

		// Privacy
		"privacy.title": "Política de privacidade",
		"privacy.subtitle": "Declaração de proteção de dados de acordo com o RGPD",
	},
	da: {
		// Nav
		"nav.about": "Om mig",
		"nav.travels": "Rejser",
		"nav.journal": "Journal",
		"nav.collaborate": "Samarbejde",
		"nav.impressum": "Impressum",
		"nav.privacy": "Privatlivspolitik",
		"nav.merch": "Shop",
		"nav.trainings": "Træning",
		"nav.pictures": "Billeder",

		// Merch page
		"merch.title": "Merchandise Shop",
		"merch.subtitle":
			"Bær Micklas – eksklusive kollektioner til ægte eventyrere.",
		"merch.cta": "Besøg shoppen",

		// Trainings page
		"trainings.title": "Træning & Booking",
		"trainings.subtitle": "Professionel fotograferingstræning og workshops.",
		"trainings.cta": "Book nu",

		// Pictures page
		"pictures.title": "Mine billeder",
		"pictures.subtitle": "Licenseret rejsefotografering til dit projekt.",
		"pictures.cta": "Anmod om billeder",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Rejsefotografi • 120k+ fællesskab",
		"hero.description": "Din partner til markedsføring på sociale medier",
		"hero.cta.about": "Mød Micklas",
		"hero.cta.collaborate": "Samarbejd nu",
		"hero.scroll": "SCROL FOR AT UDFORSKE",

		// Stats
		"stats.followers": "Instagram-følgere",
		"stats.countries": "Besøgte lande",
		"stats.stories": "Rejsehistorier",
		"stats.languages": "Sprog",

		// Featured travels
		"featured.badge": "DESTINATIONER",
		"featured.title": "Udvalgte rejser",
		"featured.subtitle": "Oplev nogle af Micklas' mest mindeværdige rejser",
		"featured.read": "Læs hele historien →",
		"featured.all": "Udforsk alle destinationer →",

		// Testimonials
		"testimonials.badge": "UDTALELSER",
		"testimonials.title": "Hvad brands siger om at arbejde med Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Følg @micklas på Instagram",
		"instagram.subtitle": "Seneste øjeblikke fra mine rejser",
		"instagram.follow": "@micklas på Instagram",
		"instagram.caption": "Følg for daglig rejseinspiration",

		// CTA
		"cta.title": "Klar til at arbejde sammen?",
		"cta.description":
			"Uanset om du er et brand, turistorganisation eller hotel — lad os skabe noget smukt sammen.",
		"cta.button": "Start en samtale",

		// About
		"about.badge": "OM MIG",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Rejsefotograf, historiefortæller og skaber med passion for autentiske oplevelser og episke landskaber.",
		"about.p1":
			"Hej, jeg er Michael — kendt som <strong>Micklas</strong> for mit 120k+ Instagram-fællesskab. Jeg er rejsefotograf og content creator, der har udforsket over 40 lande på alle kontinenter.",
		"about.p2":
			"Mit arbejde lever i skæringspunktet mellem eventyr og æstetik. Fra midnatssolen på Lofoten til de gamle medinaer i Marokko — jeg fanger verden, som jeg ser den: ærlig, dramatisk og fuld af undren.",
		"about.p3":
			"Ud over at skabe indhold til mine egne platforme samarbejder jeg med turistorganisationer, hoteller og livsstilsbrands for at skabe visuelle historier, der resonerer med moderne rejsende.",
		"about.p4":
			"Hvert fotografi fortæller en historie — men de bedste inviterer dig til at blive en del af den. Uanset om det er gennem min linse eller et partnerskab, er jeg her for at gøre disse historier uforglemmelige.",
		"about.stats.countries": "Lande",
		"about.stats.followers": "Følgere",
		"about.stats.languages": "Sprog",
		"about.cta": "Arbejd med Micklas",

		// Travels
		"travels.badge": "PORTFOLIO",
		"travels.title": "Rejser",
		"travels.subtitle":
			"En visuel rejse gennem nogle af verdens mest betagende steder.",
		"travels.filter.all": "Alle",
		"travels.empty": "Ingen destinationer fundet for de valgte filtre.",
		"travels.footer":
			"Dette portfolio vokser. Flere destinationer vil blive tilføjet regelmæssigt.",

		// Journal
		"journal.badge": "REJSEJOURNAL",
		"journal.title": "Historier fra vejen",
		"journal.subtitle":
			"Behind-the-scenes-øjeblikke, rejsetips og ærlige refleksioner fra mine rejser rundt om i verden.",
		"journal.empty":
			"Ingen offentliggjorte historier endnu. Kig tilbage snart!",
		"journal.read": "Læs hele historien →",
		"journal.back": "← Tilbage til journalen",

		// Collaborate
		"collaborate.badge": "LAD OS SKABE NOGET STORT",
		"collaborate.title": "Samarbejd med Micklas",
		"collaborate.subtitle":
			"Uanset om du er et brand, turistorganisation, hotel eller agentur — vi vil gerne høre fra dig.",
		"collaborate.name": "Dit navn *",
		"collaborate.email": "E-mailadresse *",
		"collaborate.company": "Virksomhed / Organisation",
		"collaborate.message": "Fortæl os om dit projekt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@brand.dk",
		"collaborate.placeholder.company": "Dit brand eller turistorganisation",
		"collaborate.placeholder.message":
			"Vi leder efter en rejsefotograf til vores sommerkampagne i Alperne...",
		"collaborate.consent":
			"Jeg accepterer, at mine data (navn, e-mail, virksomhed, besked) behandles af Micklas Travels for at besvare min henvendelse. Dataene opbevares i maksimalt 6 måneder og deles ikke med tredjeparter. Jeg kan til enhver tid tilbagekalde dette samtykke ved at sende en e-mail til hello@micklas.travel.",
		"collaborate.privacy": "For mere information, læs venligst vores",
		"collaborate.submit": "Send besked",
		"collaborate.sending": "Sender din besked...",
		"collaborate.success.title": "Tak!",
		"collaborate.success.text":
			"Din besked er modtaget. Micklas vender tilbage inden for 48 timer.",
		"collaborate.success.back": "Tilbage til forsiden",
		"collaborate.gdpr":
			"Denne formular er GDPR-kompatibel. Dine data behandles med omhu.",
		"collaborate.error.consent":
			"Accepter databehandlingsaftalen for at fortsætte.",

		// Footer
		"footer.rights": "Alle rettigheder forbeholdes.",
		"footer.tagline": "Bygget med ❤️ til rejsefællesskabet.",

		// Impressum
		"impressum.title": "Impressum",
		"impressum.subtitle":
			"Juridisk meddelelse i henhold til §5 TMG (tysk medielov)",

		// Privacy
		"privacy.title": "Privatlivspolitik",
		"privacy.subtitle": "Databeskyttelseserklæring i henhold til GDPR",
	},
	sv: {
		// Nav
		"nav.about": "Om mig",
		"nav.travels": "Resor",
		"nav.journal": "Journal",
		"nav.collaborate": "Samarbeta",
		"nav.impressum": "Impressum",
		"nav.privacy": "Integritetspolicy",
		"nav.merch": "Shop",
		"nav.trainings": "Träningar",
		"nav.pictures": "Bilder",

		// Merch page
		"merch.title": "Merchandise Shop",
		"merch.subtitle": "Bär Micklas – exklusiva kollektioner för äventyrare.",
		"merch.cta": "Besök shoppen",

		// Trainings page
		"trainings.title": "Träningar & Bokning",
		"trainings.subtitle": "Professionell fototräning och workshops.",
		"trainings.cta": "Boka nu",

		// Pictures page
		"pictures.title": "Mina bilder",
		"pictures.subtitle": "Licensierad resefotografering för ditt projekt.",
		"pictures.cta": "Begär bilder",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Resefotografi • 120k+ community",
		"hero.description": "Din partner för marknadsföring i sociala medier",
		"hero.cta.about": "Träffa Micklas",
		"hero.cta.collaborate": "Samarbeta nu",
		"hero.scroll": "SKROLLA FÖR ATT UTFORSKA",

		// Stats
		"stats.followers": "Instagram-följare",
		"stats.countries": "Besökta länder",
		"stats.stories": "Reseberättelser",
		"stats.languages": "Språk",

		// Featured travels
		"featured.badge": "DESTINATIONER",
		"featured.title": "Utvalda resor",
		"featured.subtitle": "Upptäck några av Micklas mest minnesvärda resor",
		"featured.read": "Läs hela berättelsen →",
		"featured.all": "Utforska alla destinationer →",

		// Testimonials
		"testimonials.badge": "TESTIMONIALS",
		"testimonials.title": "Vad varumärken säger om att samarbeta med Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Följ @micklas på Instagram",
		"instagram.subtitle": "Senaste ögonblicken från mina resor",
		"instagram.follow": "@micklas på Instagram",
		"instagram.caption": "Följ för daglig reseinspiration",

		// CTA
		"cta.title": "Redo att arbeta tillsammans?",
		"cta.description":
			"Oavsett om du är ett varumärke, turistorganisation eller hotell — låt oss skapa något vackert tillsammans.",
		"cta.button": "Starta en konversation",

		// About
		"about.badge": "OM MIG",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Resefotograf, berättare och kreatör med passion för autentiska upplevelser och episka landskap.",
		"about.p1":
			"Hej, jag är Michael — känd som <strong>Micklas</strong> för min 120k+ Instagram-community. Jag är resefotograf och innehållsskapare som har utforskat över 40 länder på alla kontinenter.",
		"about.p2":
			"Mitt arbete lever i skärningspunkten mellan äventyr och estetik. Från midnattssolen på Lofoten till de gamla medinorna i Marocko — jag fångar världen som jag ser den: ärlig, dramatisk och full av förundran.",
		"about.p3":
			"Utöver att skapa innehåll för mina egna plattformar samarbetar jag med turistorganisationer, hotell och livsstilsvarumärken för att skapa visuella berättelser som tilltalar moderna resenärer.",
		"about.p4":
			"Varje fotografi berättar en historia — men de bästa bjuder in dig att bli en del av den. Oavsett om det är genom min lins eller ett partnerskap, är jag här för att göra dessa berättelser oförglömliga.",
		"about.stats.countries": "Länder",
		"about.stats.followers": "Följare",
		"about.stats.languages": "Språk",
		"about.cta": "Arbeta med Micklas",

		// Travels
		"travels.badge": "PORTFOLIO",
		"travels.title": "Resor",
		"travels.subtitle":
			"En visuell resa genom några av världens mest hisnande platser.",
		"travels.filter.all": "Alla",
		"travels.empty": "Inga destinationer hittades för de valda filtren.",
		"travels.footer":
			"Denna portfölj växer. Fler destinationer kommer att läggas till regelbundet.",

		// Journal
		"journal.badge": "RESEJOURNAL",
		"journal.title": "Berättelser från vägen",
		"journal.subtitle":
			"Ögonblick bakom kulisserna, resetips och ärliga reflektioner från mina resor runt om i världen.",
		"journal.empty": "Inga publicerade berättelser än. Kom tillbaka snart!",
		"journal.read": "Läs hela berättelsen →",
		"journal.back": "← Tillbaka till journalen",

		// Collaborate
		"collaborate.badge": "Låt oss skapa något stort",
		"collaborate.title": "Samarbeta med Micklas",
		"collaborate.subtitle":
			"Oavsett om du är ett varumärke, turistorganisation, hotell eller byrå — vi vill gärna höra från dig.",
		"collaborate.name": "Ditt namn *",
		"collaborate.email": "E-postadress *",
		"collaborate.company": "Företag / Organisation",
		"collaborate.message": "Berätta om ditt projekt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@varumarke.se",
		"collaborate.placeholder.company":
			"Ditt varumärke eller turistorganisation",
		"collaborate.placeholder.message":
			"Vi söker en resefotograf för vår sommarkampanj i Alperna...",
		"collaborate.consent":
			"Jag godkänner att mina data (namn, e-post, företag, meddelande) behandlas av Micklas Travels för att besvara min förfrågan. Uppgifterna lagras i högst 6 månader och delas inte med tredje part. Jag kan återkalla detta samtycke när som helst genom att mejla hello@micklas.travel.",
		"collaborate.privacy": "För mer information, läs vår",
		"collaborate.submit": "Skicka meddelande",
		"collaborate.sending": "Skickar ditt meddelande...",
		"collaborate.success.title": "Tack!",
		"collaborate.success.text":
			"Ditt meddelande har mottagits. Micklas återkommer inom 48 timmar.",
		"collaborate.success.back": "Tillbaka till startsidan",
		"collaborate.gdpr":
			"Detta formulär är GDPR-kompatibelt. Dina data hanteras med omsorg.",
		"collaborate.error.consent":
			"Godkänn databehandlingsavtalet för att fortsätta.",

		// Footer
		"footer.rights": "Alla rättigheter förbehållna.",
		"footer.tagline": "Byggd med ❤️ för resecommunityn.",

		// Impressum
		"impressum.title": "Impressum",
		"impressum.subtitle": "Juridisk information enligt §5 TMG (tysk medielag)",

		// Privacy
		"privacy.title": "Integritetspolicy",
		"privacy.subtitle": "Dataskyddsförklaring enligt GDPR",
	},
	no: {
		// Nav
		"nav.about": "Om meg",
		"nav.travels": "Reiser",
		"nav.journal": "Journal",
		"nav.collaborate": "Samarbeid",
		"nav.impressum": "Impressum",
		"nav.privacy": "Personvernerklæring",
		"nav.merch": "Butikk",
		"nav.trainings": "Treninger",
		"nav.pictures": "Bilder",

		// Merch page
		"merch.title": "Merchandise-butikk",
		"merch.subtitle": "Bær Micklas – eksklusive kolleksjoner for eventyrere.",
		"merch.cta": "Besøk butikken",

		// Trainings page
		"trainings.title": "Treninger & Booking",
		"trainings.subtitle": "Profesjonell fototrening og workshops.",
		"trainings.cta": "Bestill nå",

		// Pictures page
		"pictures.title": "Mine bilder",
		"pictures.subtitle": "Lisensiert reisefotografering for prosjektet ditt.",
		"pictures.cta": "Be om bilder",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Reisefotografering • 120k+ fellesskap",
		"hero.description": "Din partner for markedsføring i sosiale medier",
		"hero.cta.about": "Møt Micklas",
		"hero.cta.collaborate": "Samarbeid nå",
		"hero.scroll": "RULL FOR Å UTFORSKE",

		// Stats
		"stats.followers": "Instagram-følgere",
		"stats.countries": "Besøkte land",
		"stats.stories": "Reisehistorier",
		"stats.languages": "Språk",

		// Featured travels
		"featured.badge": "DESTINASJONER",
		"featured.title": "Utvalgte reiser",
		"featured.subtitle": "Oppdag noen av Micklas' mest minneverdige reiser",
		"featured.read": "Les hele historien →",
		"featured.all": "Utforsk alle destinasjoner →",

		// Testimonials
		"testimonials.badge": "ANBEFALINGER",
		"testimonials.title": "Hva merkevarer sier om å samarbeide med Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Følg @micklas på Instagram",
		"instagram.subtitle": "Siste øyeblikk fra reisene mine",
		"instagram.follow": "@micklas på Instagram",
		"instagram.caption": "Følg for daglig reiseinspirasjon",

		// CTA
		"cta.title": "Klar til å jobbe sammen?",
		"cta.description":
			"Enten du er en merkevare, turistforening eller et hotell — la oss skape noe vakkert sammen.",
		"cta.button": "Start en samtale",

		// About
		"about.badge": "OM MEG",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Reisefotograf, historieforteller og skaper med lidenskap for autentiske opplevelser og episke landskap.",
		"about.p1":
			"Hei, jeg er Michael — kjent som <strong>Micklas</strong> for mitt 120k+ Instagram-fellesskap. Jeg er reisefotograf og innholdsskaper som har utforsket over 40 land på alle kontinenter.",
		"about.p2":
			"Arbeidet mitt lever i skjæringspunktet mellom eventyr og estetikk. Fra midnattssolen på Lofoten til de gamle medinaene i Marokko — jeg fanger verden slik jeg ser den: ærlig, dramatisk og full av undring.",
		"about.p3":
			"Utover å lage innhold for mine egne plattformer, samarbeider jeg med turistforeninger, hoteller og livsstilsmerkevarer for å skape visuelle historier som resonerer med moderne reisende.",
		"about.p4":
			"Hvert fotografi forteller en historie — men de beste inviterer deg til å bli en del av den. Enten gjennom linsen min eller gjennom et partnerskap, er jeg her for å gjøre disse historiene uforglemmelige.",
		"about.stats.countries": "Land",
		"about.stats.followers": "Følgere",
		"about.stats.languages": "Språk",
		"about.cta": "Jobb med Micklas",

		// Travels
		"travels.badge": "PORTEFØLJE",
		"travels.title": "Reiser",
		"travels.subtitle":
			"En visuell reise gjennom noen av verdens mest fantastiske steder.",
		"travels.filter.all": "Alle",
		"travels.empty": "Ingen destinasjoner funnet for de valgte filtrene.",
		"travels.footer":
			"Denne porteføljen vokser. Flere destinasjoner vil bli lagt til jevnlig.",

		// Journal
		"journal.badge": "REISEJOURNAL",
		"journal.title": "Historier fra veien",
		"journal.subtitle":
			"Øyeblikk bak kulissene, reisetips og ærlige refleksjoner fra reisene mine rundt om i verden.",
		"journal.empty": "Ingen publiserte historier ennå. Kom tilbake snart!",
		"journal.read": "Les hele historien →",
		"journal.back": "← Tilbake til journalen",

		// Collaborate
		"collaborate.badge": "LA OSS SKAPE NOE STORT",
		"collaborate.title": "Samarbeid med Micklas",
		"collaborate.subtitle":
			"Enten du er en merkevare, turistforening, hotell eller byrå — vi vil gjerne høre fra deg.",
		"collaborate.name": "Ditt navn *",
		"collaborate.email": "E-postadresse *",
		"collaborate.company": "Bedrift / Organisasjon",
		"collaborate.message": "Fortell oss om prosjektet ditt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@merkevare.no",
		"collaborate.placeholder.company": "Ditt merke eller turistforening",
		"collaborate.placeholder.message":
			"Vi ser etter en reisefotograf til sommerkampanjen vår i Alpene...",
		"collaborate.consent":
			"Jeg godtar at mine data (navn, e-post, bedrift, melding) behandles av Micklas Travels for å svare på min henvendelse. Dataene lagres i maksimalt 6 måneder og deles ikke med tredjeparter. Jeg kan når som helst trekke tilbake dette samtykket ved å sende en e-post til hello@micklas.travel.",
		"collaborate.privacy": "For mer informasjon, les vår",
		"collaborate.submit": "Send melding",
		"collaborate.sending": "Sender meldingen din...",
		"collaborate.success.title": "Takk!",
		"collaborate.success.text":
			"Meldingen din er mottatt. Micklas vil svare deg innen 48 timer.",
		"collaborate.success.back": "Tilbake til startsiden",
		"collaborate.gdpr":
			"Dette skjemaet er GDPR-kompatibelt. Dataene dine behandles med omhu.",
		"collaborate.error.consent":
			"Godta databehandlingsavtalen for å fortsette.",

		// Footer
		"footer.rights": "Alle rettigheter forbeholdt.",
		"footer.tagline": "Bygget med ❤️ for reisefellesskapet.",

		// Impressum
		"impressum.title": "Impressum",
		"impressum.subtitle":
			"Juridisk informasjon i henhold til §5 TMG (tysk medielov)",

		// Privacy
		"privacy.title": "Personvernerklæring",
		"privacy.subtitle": "Databeskyttelseserklæring i henhold til GDPR",
	},
	me: {
		// Nav
		"nav.about": "O meni",
		"nav.travels": "Putovanja",
		"nav.journal": "Dnevnik",
		"nav.collaborate": "Saradnja",
		"nav.impressum": "Impresum",
		"nav.privacy": "Politika privatnosti",
		"nav.merch": "Prodavnica",
		"nav.trainings": "Obuke",
		"nav.pictures": "Slike",

		// Merch page
		"merch.title": "Prodavnica suvenira",
		"merch.subtitle":
			"Nosite Micklas – ekskluzivne kolekcije za prave avanturiste.",
		"merch.cta": "Posjetite prodavnicu",

		// Trainings page
		"trainings.title": "Obuke & Rezervacije",
		"trainings.subtitle": "Profesionalne foto-obuke i radionice.",
		"trainings.cta": "Rezervišite sada",

		// Pictures page
		"pictures.title": "Moje slike",
		"pictures.subtitle": "Licencirana putopisna fotografija za vaš projekat.",
		"pictures.cta": "Zatražite slike",

		// Hero
		"hero.title": "MICKLAS TRAVELS",
		"hero.subtitle": "Putopisna fotografija • 120k+ zajednica",
		"hero.description": "Vaš partner za oglašavanje na društvenim mrežama",
		"hero.cta.about": "Upoznajte Micklasa",
		"hero.cta.collaborate": "Sarađujte sada",
		"hero.scroll": "SKROLUJTE DA ISTRAŽITE",

		// Stats
		"stats.followers": "Pratilaca na Instagramu",
		"stats.countries": "Posjećene zemlje",
		"stats.stories": "Putopisne priče",
		"stats.languages": "Jezici",

		// Featured travels
		"featured.badge": "DESTINACIJE",
		"featured.title": "Istaknuta putovanja",
		"featured.subtitle": "Otkrijte najnezaboravnija Micklasova putovanja",
		"featured.read": "Pročitajte cijelu priču →",
		"featured.all": "Istražite sve destinacije →",

		// Testimonials
		"testimonials.badge": "PREPORUKE",
		"testimonials.title": "Šta brendovi kažu o saradnji sa Micklasom",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Zapratite @micklas na Instagramu",
		"instagram.subtitle": "Najnoviji trenuci sa mojih putovanja",
		"instagram.follow": "@micklas na Instagramu",
		"instagram.caption": "Zapratite za svakodnevnu putopisnu inspiraciju",

		// CTA
		"cta.title": "Spremni za saradnju?",
		"cta.description":
			"Bilo da ste brend, turistička organizacija ili hotel — hajde da zajedno stvorimo nešto lijepo.",
		"cta.button": "Započnite razgovor",

		// About
		"about.badge": "O MENI",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Putopisni fotograf, pripovjedač i kreator sa strašću za autentična iskustva i epske pejzaže.",
		"about.p1":
			"Zdravo, ja sam Michael — poznat kao <strong>Micklas</strong> mojoj Instagram zajednici od 120k+. Putopisni sam fotograf i kreator sadržaja koji je istražio preko 40 zemalja na svim kontinentima.",
		"about.p2":
			"Moj rad živi na raskršću avanture i estetike. Od ponoćnog sunca na Lofotenima do drevnih medina u Maroku — bilježim svijet onako kako ga vidim: iskreno, dramatično i puno čuda.",
		"about.p3":
			"Osim stvaranja sadržaja za svoje platforme, sarađujem sa turističkim organizacijama, hotelima i lifestyle brendovima kako bih stvorio vizuelne priče koje odjekuju sa savremenim putnicima.",
		"about.p4":
			"Svaka fotografija priča priču — ali one najbolje pozivaju vas da postanete njen dio. Bilo kroz moj objektiv ili kroz partnerstvo, ovdje sam da te priče učinim nezaboravnim.",
		"about.stats.countries": "Zemlje",
		"about.stats.followers": "Pratioci",
		"about.stats.languages": "Jezici",
		"about.cta": "Radite sa Micklasom",

		// Travels
		"travels.badge": "PORTFOLIO",
		"travels.title": "Putovanja",
		"travels.subtitle":
			"Vizuelno putovanje kroz neka od najljepših mjesta na svijetu.",
		"travels.filter.all": "Sve",
		"travels.empty": "Nema destinacija za odabrane filtere.",
		"travels.footer":
			"Ovaj portfolio raste. Nove destinacije će se redovno dodavati.",

		// Journal
		"journal.badge": "PUTOPISNI DNEVNIK",
		"journal.title": "Priče s puta",
		"journal.subtitle":
			"Trenuci iza kulisa, putopisni savjeti i iskrene refleksije sa mojih putovanja širom svijeta.",
		"journal.empty": "Još nema objavljenih priča. Provjerite uskoro!",
		"journal.read": "Pročitajte cijelu priču →",
		"journal.back": "← Nazad u dnevnik",

		// Collaborate
		"collaborate.badge": "HAJDE DA STVORIMO NEŠTO VELIKO",
		"collaborate.title": "Sarađujte sa Micklasom",
		"collaborate.subtitle":
			"Bilo da ste brend, turistička organizacija, hotel ili agencija — rado ćemo čuti od vas.",
		"collaborate.name": "Vaše ime *",
		"collaborate.email": "E-mail adresa *",
		"collaborate.company": "Kompanija / Organizacija",
		"collaborate.message": "Recite nam nešto o svom projektu *",
		"collaborate.placeholder.name": "Ana Petrović",
		"collaborate.placeholder.email": "ana@brend.me",
		"collaborate.placeholder.company": "Vaš brend ili turistička organizacija",
		"collaborate.placeholder.message":
			"Tražimo putopisnog fotografa za našu ljetnju kampanju u Alpima...",
		"collaborate.consent":
			"Saglasan/na sam da moji podaci (ime, e-mail, kompanija, poruka) budu obrađeni od strane Micklas Travels kako bi odgovorili na moj upit. Podaci će se čuvati najviše 6 mjeseci i neće se dijeliti sa trećim licima. Mogu povući ovu saglasnost u bilo kom trenutku slanjem e-maila na hello@micklas.travel.",
		"collaborate.privacy": "Za više informacija, pročitajte našu",
		"collaborate.submit": "Pošaljite poruku",
		"collaborate.sending": "Slanje poruke...",
		"collaborate.success.title": "Hvala!",
		"collaborate.success.text":
			"Vaša poruka je primljena. Micklas će vam se javiti u roku od 48 sati.",
		"collaborate.success.back": "Nazad na početnu",
		"collaborate.gdpr":
			"Ovaj obrazac je usklađen sa GDPR-om. Vaši podaci se pažljivo obrađuju.",
		"collaborate.error.consent":
			"Prihvatite ugovor o obradi podataka da biste nastavili.",

		// Footer
		"footer.rights": "Sva prava zadržana.",
		"footer.tagline": "Izgrađeno sa ❤️ za putopisnu zajednicu.",

		// Impressum
		"impressum.title": "Impresum",
		"impressum.subtitle":
			"Pravno obavještenje prema §5 TMG (Njemački zakon o medijima)",

		// Privacy
		"privacy.title": "Politika privatnosti",
		"privacy.subtitle": "Izjava o zaštiti podataka prema GDPR-u",
	},
};

// Helper: get translation for a key in the given locale, fallback to English
export function t(key: string, locale: Locale = "de"): string {
	return translations[locale]?.[key] ?? translations["en"]?.[key] ?? key;
}

export { translations };
export function getLocale(locale: string | undefined): Locale {
	if (locale && locale in translations) return locale as Locale;
	return "de";
}
