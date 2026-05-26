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
		"nav.collaborate": "Partner werden",
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
		"hero.subtitle":
			"Authentische Geschichten. Atemberaubende Bilder. 120k+ begeisterte Follower.",
		"hero.description":
			"Ich verwandle Reisen in unvergessliche Markenerlebnisse.",
		"hero.cta.about": "Micklas kennenlernen",
		"hero.cta.collaborate": "Partner werden",
		"hero.scroll": "SCROLLEN ZUM ENTDECKEN",

		// Stats
		"stats.followers": "Instagram Community",
		"stats.countries": "Bereiste Länder",
		"stats.stories": "Inspirierende Geschichten",
		"stats.languages": "Monatliche Reichweite",

		// Featured travels
		"featured.badge": "REISEZIELE",
		"featured.title": "Ausgewählte Reisen",
		"featured.subtitle":
			"Die inspirierendsten Reisegeschichten, fotografisch erzählt.",
		"featured.read": "Geschichte entdecken →",
		"featured.all": "Alle Reiseziele entdecken →",

		// Testimonials
		"testimonials.badge": "REFERENZEN",
		"testimonials.title":
			"Das sagen Kooperationspartner über die Zusammenarbeit mit Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Täglich neue Perspektiven auf @_micklas_",
		"instagram.subtitle": "Hinter den Kulissen. Unterwegs. Ungefiltert.",
		"instagram.follow": "@_micklas_ auf Instagram",
		"instagram.caption": "Folge mir für Momente, die Geschichten erzählen.",

		// CTA
		"cta.title": "Lass uns gemeinsam etwas Großes schaffen.",
		"cta.description":
			"Ob du eine Marke, ein Tourismusverband oder ein visionäres Hotel bist – ich bringe deine Geschichte zum Leuchten.",
		"cta.button": "Jetzt Kontakt aufnehmen",

		// About
		"about.badge": "ÜBER MICH",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas ist mehr als ein Name – es ist eine Einladung, die Welt durch meine Augen zu sehen. Jedes Bild erzählt eine Geschichte, jede Reise hinterlässt Spuren.",
		"about.p1":
			"Ich bin Michael – auf Instagram bekannt als <strong>Micklas</strong>. Seit Jahren lebe ich meine Leidenschaft für Reisen, Fotografie und authentisches Storytelling. Mehr als 120.000 Menschen folgen mir auf meinen Abenteuern rund um den Globus.",
		"about.p2":
			"Über 40 Länder, unzählige Horizonte. Von den Lofoten bis Marrakesch – ich tauche ein in Kulturen, fange Licht und Emotionen ein und zeige die Welt so ehrlich und berührend, wie sie ist.",
		"about.p3":
			"Meine Bilder sind mehr als schöne Aufnahmen – sie sind Werkzeuge für Marken, die Menschen bewegen wollen. Ich arbeite mit Tourismusverbänden, Hotels und Lifestyle-Marken zusammen, um visuelle Geschichten zu schaffen, die im Gedächtnis bleiben.",
		"about.p4":
			"Jede Zusammenarbeit beginnt mit einer Idee. Aus ihr entstehen Bilder, die begeistern, inspirieren und verbinden. Ich lade dich ein, Teil dieser Geschichten zu werden.",
		"about.stats.countries": "Bereiste Länder",
		"about.stats.followers": "Follower",
		"about.stats.languages": "Monatliche Reichweite",
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
			"Hinter den Bildern: Echte Erlebnisse, persönliche Einblicke und Geschichten, die du nirgendwo sonst findest.",
		"journal.empty":
			"Noch keine veröffentlichten Geschichten. Schau bald wieder vorbei!",
		"journal.read": "Die ganze Geschichte lesen →",
		"journal.back": "← Zurück zum Journal",

		// Collaborate
		"collaborate.badge": "LASS UNS GROSSES SCHAFFEN",
		"collaborate.title": "Mit Micklas kooperieren",
		"collaborate.subtitle":
			"Du hast eine Vision – ich habe die Bilder und die Reichweite, um sie zum Leben zu erwecken. Ob Kampagne, Event oder Markenauftritt: Ich bin gespannt auf deine Idee.",
		"collaborate.name": "Dein Name *",
		"collaborate.email": "E-Mail-Adresse *",
		"collaborate.company": "Unternehmen / Organisation",
		"collaborate.message": "Erzähl mir von deinem Projekt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@marke.de",
		"collaborate.placeholder.company": "Dein Unternehmen oder Verband",
		"collaborate.placeholder.message":
			"Wir planen eine Kampagne in den Alpen und suchen einen Fotografen mit echter Leidenschaft für Reisen...",
		"collaborate.consent":
			"Ich stimme zu, dass meine Daten (Name, E-Mail, Unternehmen, Nachricht) von Micklas Travels verarbeitet werden, um meine Anfrage zu beantworten. Die Daten werden maximal 6 Monate gespeichert und nicht an Dritte weitergegeben. Ich kann diese Einwilligung jederzeit per E-Mail an hello@micklas.travel widerrufen.",
		"collaborate.privacy": "Für weitere Informationen lies bitte unsere",
		"collaborate.submit": "Anfrage senden",
		"collaborate.sending": "Anfrage wird gesendet...",
		"collaborate.success.title": "Vielen Dank!",
		"collaborate.success.text":
			"Deine Nachricht ist angekommen. Ich melde mich innerhalb von 48 Stunden bei dir.",
		"collaborate.success.back": "Zurück zur Startseite",
		"collaborate.gdpr":
			"Dieses Formular ist DSGVO-konform. Deine Daten werden vertraulich behandelt.",
		"collaborate.error.consent":
			"Bitte akzeptiere die Datenverarbeitungsvereinbarung, um fortzufahren.",

		// Footer
		"footer.rights": "Alle Rechte vorbehalten.",
		"footer.tagline": "Lebe deine Reise. Erzähle deine Geschichte.",

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
		"nav.collaborate": "Become a Partner",
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
		"hero.subtitle":
			"Authentic Stories. Breathtaking Images. 120k+ Devoted Followers.",
		"hero.description":
			"Turning journeys into unforgettable brand experiences.",
		"hero.cta.about": "Meet Micklas",
		"hero.cta.collaborate": "Become a Partner",
		"hero.scroll": "SCROLL TO EXPLORE",

		"stats.followers": "Instagram Community",
		"stats.countries": "Countries Explored",
		"stats.stories": "Inspiring Stories",
		"stats.languages": "Monthly Reach",

		"featured.badge": "DESTINATIONS",
		"featured.title": "Featured Travels",
		"featured.subtitle":
			"The most inspiring travel stories, told through photography.",
		"featured.read": "Discover the story →",
		"featured.all": "Explore all destinations →",

		"testimonials.badge": "TESTIMONIALS",
		"testimonials.title": "What collaboration partners say about working with Micklas",

		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Fresh perspectives daily on @_micklas_",
		"instagram.subtitle": "Behind the lens. On the road. Unfiltered.",
		"instagram.follow": "@_micklas_ on Instagram",
		"instagram.caption": "Follow for moments that tell stories.",

		"cta.title": "Let's create something extraordinary together.",
		"cta.description":
			"Whether you're a brand, tourism board, or visionary hotel — I'll bring your story to light.",
		"cta.button": "Get in Touch",

		"about.badge": "ABOUT",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas is more than a name — it's an invitation to see the world through my eyes. Every image tells a story, every journey leaves its mark.",
		"about.p1":
			"I'm Michael — known as <strong>Micklas</strong> on Instagram. For years, I've lived my passion for travel, photography, and authentic storytelling. More than 120,000 people follow me on my adventures around the globe.",
		"about.p2":
			"Over 40 countries, countless horizons. From the Lofoten Islands to Marrakech — I dive into cultures, capture light and emotion, and show the world as honestly and movingly as it is.",
		"about.p3":
			"My images are more than beautiful shots — they're tools for brands that want to move people. I partner with tourism boards, hotels, and lifestyle brands to create visual stories that leave a lasting impression.",
		"about.p4":
			"Every collaboration starts with an idea. From it come images that captivate, inspire, and connect. I invite you to become part of these stories.",
		"about.stats.countries": "Countries Explored",
		"about.stats.followers": "Followers",
		"about.stats.languages": "Monthly Reach",
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
			"Beyond the frame: real experiences, personal insights, and stories you won't find anywhere else.",
		"journal.empty": "No published stories yet. Check back soon!",
		"journal.read": "Read the full story →",
		"journal.back": "← Back to Journal",

		"collaborate.badge": "LET'S CREATE SOMETHING EXTRAORDINARY",
		"collaborate.title": "Collaborate with Micklas",
		"collaborate.subtitle":
			"You have a vision — I have the images and the reach to bring it to life. Campaign, event, or brand identity: I'm eager to hear your idea.",
		"collaborate.name": "Your Name *",
		"collaborate.email": "Email Address *",
		"collaborate.company": "Company / Organization",
		"collaborate.message": "Tell me about your project *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@brand.com",
		"collaborate.placeholder.company": "Your Company or Organization",
		"collaborate.placeholder.message":
			"We're planning a campaign in the Alps and are looking for a photographer with a genuine passion for travel...",
		"collaborate.consent":
			"I agree that my data (name, email, company, message) will be processed by Micklas Travels to respond to my inquiry. The data will be stored for a maximum of 6 months and will not be shared with third parties. I can revoke this consent at any time by emailing hello@micklas.travel.",
		"collaborate.privacy": "For more information, please read our",
		"collaborate.submit": "Send Inquiry",
		"collaborate.sending": "Sending your inquiry...",
		"collaborate.success.title": "Thank you!",
		"collaborate.success.text":
			"Your message has been received. Micklas will get back to you within 48 hours.",
		"collaborate.success.back": "Back to homepage",
		"collaborate.gdpr":
			"This form is GDPR / DSGVO compliant. Your data is handled with care.",
		"collaborate.error.consent":
			"Please accept the data processing agreement to continue.",

		"footer.rights": "All rights reserved.",
		"footer.tagline": "Live your journey. Tell your story.",

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
		"nav.collaborate": "Devenir partenaire",
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
		"hero.subtitle":
			"Histoires authentiques. Images à couper le souffle. 120k+ abonnés passionnés.",
		"hero.description":
			"Je transforme les voyages en expériences de marque inoubliables.",
		"hero.cta.about": "Découvrir Micklas",
		"hero.cta.collaborate": "Devenir partenaire",
		"hero.scroll": "FAITES DÉFILER POUR EXPLORER",

		// Stats
		"stats.followers": "Communauté Instagram",
		"stats.countries": "Pays explorés",
		"stats.stories": "Histoires inspirantes",
		"stats.languages": "Portée mensuelle",

		// Featured travels
		"featured.badge": "DESTINATIONS",
		"featured.title": "Voyages en vedette",
		"featured.subtitle":
			"Les récits de voyage les plus inspirants, racontés par la photographie.",
		"featured.read": "Découvrir l'histoire →",
		"featured.all": "Explorer toutes les destinations →",

		// Testimonials
		"testimonials.badge": "TÉMOIGNAGES",
		"testimonials.title":
			"Ce que les partenaires disent de leur collaboration avec Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Chaque jour, un nouveau regard sur @_micklas_",
		"instagram.subtitle": "Dans les coulisses. Sur la route. Sans filtre.",
		"instagram.follow": "@_micklas_ sur Instagram",
		"instagram.caption":
			"Suivez-moi pour des moments qui racontent des histoires.",

		// CTA
		"cta.title": "Créons ensemble quelque chose d'exceptionnel.",
		"cta.description":
			"Que vous soyez une marque, un office de tourisme ou un hôtel visionnaire – je donne vie à votre histoire.",
		"cta.button": "Prendre contact",

		// About
		"about.badge": "À PROPOS",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas est plus qu'un nom – c'est une invitation à voir le monde à travers mes yeux. Chaque image raconte une histoire, chaque voyage laisse sa trace.",
		"about.p1":
			"Je suis Michael – connu sous le nom de <strong>Micklas</strong> sur Instagram. Depuis des années, je vis ma passion pour les voyages, la photographie et le storytelling authentique. Plus de 120 000 personnes me suivent dans mes aventures autour du globe.",
		"about.p2":
			"Plus de 40 pays, d'innombrables horizons. Des îles Lofoten à Marrakech – je plonge dans les cultures, capture la lumière et l'émotion, et montre le monde avec autant d'honnêteté que d'émotion.",
		"about.p3":
			"Mes images sont plus que de belles prises de vue – ce sont des outils pour les marques qui veulent émouvoir. Je collabore avec des offices de tourisme, des hôtels et des marques de style de vie pour créer des histoires visuelles qui marquent les esprits.",
		"about.p4":
			"Chaque collaboration commence par une idée. D'elle naissent des images qui captivent, inspirent et connectent. Je vous invite à faire partie de ces histoires.",
		"about.stats.countries": "Pays explorés",
		"about.stats.followers": "Abonnés",
		"about.stats.languages": "Portée mensuelle",
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
			"Au-delà de l'image : des expériences authentiques, des anecdotes personnelles et des récits que vous ne trouverez nulle part ailleurs.",
		"journal.empty":
			"Aucune histoire publiée pour le moment. Revenez bientôt !",
		"journal.read": "Lire toute l'histoire →",
		"journal.back": "← Retour au journal",

		// Collaborate
		"collaborate.badge": "CRÉONS QUELQUE CHOSE D'EXCEPTIONNEL",
		"collaborate.title": "Collaborer avec Micklas",
		"collaborate.subtitle":
			"Vous avez une vision – j'ai les images et la portée pour la concrétiser. Campagne, événement ou identité de marque : j'ai hâte de connaître votre idée.",
		"collaborate.name": "Votre nom *",
		"collaborate.email": "Adresse e-mail *",
		"collaborate.company": "Entreprise / Organisation",
		"collaborate.message": "Parlez-moi de votre projet *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@marque.fr",
		"collaborate.placeholder.company": "Votre entreprise ou organisation",
		"collaborate.placeholder.message":
			"Nous planifions une campagne dans les Alpes et recherchons un photographe avec une véritable passion pour les voyages...",
		"collaborate.consent":
			"J'accepte que mes données (nom, e-mail, entreprise, message) soient traitées par Micklas Travels pour répondre à ma demande. Les données seront conservées pendant 6 mois maximum et ne seront pas partagées avec des tiers. Je peux révoquer ce consentement à tout moment en envoyant un e-mail à hello@micklas.travel.",
		"collaborate.privacy": "Pour plus d'informations, veuillez lire notre",
		"collaborate.submit": "Envoyer la demande",
		"collaborate.sending": "Envoi de la demande en cours...",
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
		"footer.tagline": "Vivez votre voyage. Racontez votre histoire.",

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
		"nav.collaborate": "Diventa partner",
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
		"hero.subtitle":
			"Storie autentiche. Immagini mozzafiato. 120k+ follower appassionati.",
		"hero.description":
			"Trasformo i viaggi in esperienze di marca indimenticabili.",
		"hero.cta.about": "Conosci Micklas",
		"hero.cta.collaborate": "Diventa partner",
		"hero.scroll": "SCORRI PER ESPLORARE",

		// Stats
		"stats.followers": "Community Instagram",
		"stats.countries": "Paesi esplorati",
		"stats.stories": "Storie ispiratrici",
		"stats.languages": "Copertura mensile",

		// Featured travels
		"featured.badge": "DESTINAZIONI",
		"featured.title": "Viaggi in evidenza",
		"featured.subtitle":
			"I racconti di viaggio più ispiranti, narrati attraverso la fotografia.",
		"featured.read": "Scopri la storia →",
		"featured.all": "Esplora tutte le destinazioni →",

		// Testimonials
		"testimonials.badge": "TESTIMONIALS",
		"testimonials.title":
			"Cosa dicono i partner della collaborazione con Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Nuove prospettive ogni giorno su @_micklas_",
		"instagram.subtitle": "Dietro l'obiettivo. In viaggio. Senza filtri.",
		"instagram.follow": "@_micklas_ su Instagram",
		"instagram.caption": "Seguimi per momenti che raccontano storie.",

		// CTA
		"cta.title": "Creiamo insieme qualcosa di straordinario.",
		"cta.description":
			"Che tu sia un brand, un ente turistico o un hotel visionario – darò vita alla tua storia.",
		"cta.button": "Mettiti in contatto",

		// About
		"about.badge": "CHI SONO",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas è più di un nome – è un invito a vedere il mondo attraverso i miei occhi. Ogni immagine racconta una storia, ogni viaggio lascia il segno.",
		"about.p1":
			"Sono Michael – conosciuto come <strong>Micklas</strong> su Instagram. Da anni vivo la mia passione per i viaggi, la fotografia e lo storytelling autentico. Più di 120.000 persone mi seguono nelle mie avventure in tutto il mondo.",
		"about.p2":
			"Oltre 40 paesi, innumerevoli orizzonti. Dalle Isole Lofoten a Marrakech – mi immergo nelle culture, catturo luce ed emozioni, e mostro il mondo con onestà e commozione.",
		"about.p3":
			"Le mie immagini sono più di bei scatti – sono strumenti per i brand che vogliono emozionare. Collaboro con enti turistici, hotel e brand lifestyle per creare storie visive che lasciano il segno.",
		"about.p4":
			"Ogni collaborazione inizia con un'idea. Da essa nascono immagini che catturano, ispirano e connettono. Ti invito a diventare parte di queste storie.",
		"about.stats.countries": "Paesi esplorati",
		"about.stats.followers": "Follower",
		"about.stats.languages": "Copertura mensile",
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
			"Oltre l'inquadratura: esperienze autentiche, riflessioni personali e storie che non troverai da nessun'altra parte.",
		"journal.empty": "Ancora nessuna storia pubblicata. Torna presto!",
		"journal.read": "Leggi tutta la storia →",
		"journal.back": "← Torna al diario",

		// Collaborate
		"collaborate.badge": "CREIAMO QUALCOSA DI STRAORDINARIO",
		"collaborate.title": "Collabora con Micklas",
		"collaborate.subtitle":
			"Tu hai una visione – io ho le immagini e la portata per realizzarla. Campagna, evento o identità di marca: non vedo l'ora di conoscere la tua idea.",
		"collaborate.name": "Il tuo nome *",
		"collaborate.email": "Indirizzo email *",
		"collaborate.company": "Azienda / Organizzazione",
		"collaborate.message": "Parlami del tuo progetto *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@brand.it",
		"collaborate.placeholder.company": "La tua azienda o organizzazione",
		"collaborate.placeholder.message":
			"Stiamo pianificando una campagna sulle Alpi e cerchiamo un fotografo con una genuina passione per i viaggi...",
		"collaborate.consent":
			"Acconsento al trattamento dei miei dati (nome, email, azienda, messaggio) da parte di Micklas Travels per rispondere alla mia richiesta. I dati saranno conservati per un massimo di 6 mesi e non saranno condivisi con terze parti. Posso revocare questo consenso in qualsiasi momento inviando un'email a hello@micklas.travel.",
		"collaborate.privacy": "Per maggiori informazioni, leggi la nostra",
		"collaborate.submit": "Invia richiesta",
		"collaborate.sending": "Invio della richiesta in corso...",
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
		"footer.tagline": "Vivi il tuo viaggio. Racconta la tua storia.",

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
		"nav.collaborate": "Hazte socio",
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
		"hero.subtitle":
			"Historias auténticas. Imágenes impresionantes. 120k+ seguidores apasionados.",
		"hero.description":
			"Convierto los viajes en experiencias de marca inolvidables.",
		"hero.cta.about": "Conoce a Micklas",
		"hero.cta.collaborate": "Hazte socio",
		"hero.scroll": "DESPLÁZATE PARA EXPLORAR",

		// Stats
		"stats.followers": "Comunidad de Instagram",
		"stats.countries": "Países explorados",
		"stats.stories": "Historias inspiradoras",
		"stats.languages": "Alcance mensual",

		// Featured travels
		"featured.badge": "DESTINOS",
		"featured.title": "Viajes destacados",
		"featured.subtitle":
			"Los relatos de viaje más inspiradores, contados a través de la fotografía.",
		"featured.read": "Descubre la historia →",
		"featured.all": "Explorar todos los destinos →",

		// Testimonials
		"testimonials.badge": "TESTIMONIOS",
		"testimonials.title": "Lo que los socios colaboradores dicen sobre trabajar con Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Nuevas perspectivas cada día en @_micklas_",
		"instagram.subtitle": "Detrás del lente. En la carretera. Sin filtros.",
		"instagram.follow": "@_micklas_ en Instagram",
		"instagram.caption": "Sígueme para ver momentos que cuentan historias.",

		// CTA
		"cta.title": "Creemos juntos algo extraordinario.",
		"cta.description":
			"Ya seas una marca, una oficina de turismo o un hotel visionario – daré vida a tu historia.",
		"cta.button": "Ponte en contacto",

		// About
		"about.badge": "SOBRE MÍ",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas es más que un nombre – es una invitación a ver el mundo a través de mis ojos. Cada imagen cuenta una historia, cada viaje deja su huella.",
		"about.p1":
			"Soy Michael – conocido como <strong>Micklas</strong> en Instagram. Durante años he vivido mi pasión por los viajes, la fotografía y el storytelling auténtico. Más de 120.000 personas me siguen en mis aventuras alrededor del mundo.",
		"about.p2":
			"Más de 40 países, innumerables horizontes. Desde las Islas Lofoten hasta Marrakech – me sumerjo en culturas, capturo luz y emoción, y muestro el mundo con honestidad y sentimiento.",
		"about.p3":
			"Mis imágenes son más que bonitas tomas – son herramientas para marcas que quieren emocionar. Colaboro con oficinas de turismo, hoteles y marcas de estilo de vida para crear historias visuales que dejan huella.",
		"about.p4":
			"Cada colaboración comienza con una idea. De ella nacen imágenes que cautivan, inspiran y conectan. Te invito a formar parte de estas historias.",
		"about.stats.countries": "Países explorados",
		"about.stats.followers": "Seguidores",
		"about.stats.languages": "Alcance mensual",
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
			"Más allá del encuadre: experiencias auténticas, reflexiones personales e historias que no encontrarás en ningún otro lugar.",
		"journal.empty": "Aún no hay historias publicadas. ¡Vuelve pronto!",
		"journal.read": "Leer la historia completa →",
		"journal.back": "← Volver a la bitácora",

		// Collaborate
		"collaborate.badge": "CREEMOS ALGO EXTRAORDINARIO",
		"collaborate.title": "Colabora con Micklas",
		"collaborate.subtitle":
			"Tú tienes una visión – yo tengo las imágenes y el alcance para hacerla realidad. Campaña, evento o identidad de marca: estoy deseando conocer tu idea.",
		"collaborate.name": "Tu nombre *",
		"collaborate.email": "Dirección de correo electrónico *",
		"collaborate.company": "Empresa / Organización",
		"collaborate.message": "Cuéntame sobre tu proyecto *",
		"collaborate.placeholder.name": "Ana García",
		"collaborate.placeholder.email": "ana@marca.es",
		"collaborate.placeholder.company": "Tu empresa u organización",
		"collaborate.placeholder.message":
			"Estamos planificando una campaña en los Alpes y buscamos un fotógrafo con auténtica pasión por los viajes...",
		"collaborate.consent":
			"Acepto que mis datos (nombre, correo electrónico, empresa, mensaje) sean procesados por Micklas Travels para responder a mi consulta. Los datos se almacenarán por un máximo de 6 meses y no se compartirán con terceros. Puedo revocar este consentimiento en cualquier momento enviando un correo a hello@micklas.travel.",
		"collaborate.privacy": "Para más información, lee nuestra",
		"collaborate.submit": "Enviar solicitud",
		"collaborate.sending": "Enviando tu solicitud...",
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
		"footer.tagline": "Vive tu viaje. Cuenta tu historia.",

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
		"nav.collaborate": "Torna-te parceiro",
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
		"hero.subtitle":
			"Histórias autênticas. Imagens de tirar o fôlego. 120k+ seguidores apaixonados.",
		"hero.description":
			"Transformo viagens em experiências de marca inesquecíveis.",
		"hero.cta.about": "Conhece o Micklas",
		"hero.cta.collaborate": "Torna-te parceiro",
		"hero.scroll": "DESLIZA PARA EXPLORAR",

		// Stats
		"stats.followers": "Comunidade Instagram",
		"stats.countries": "Países explorados",
		"stats.stories": "Histórias inspiradoras",
		"stats.languages": "Alcance mensal",

		// Featured travels
		"featured.badge": "DESTINOS",
		"featured.title": "Viagens em destaque",
		"featured.subtitle":
			"As histórias de viagem mais inspiradoras, contadas através da fotografia.",
		"featured.read": "Descobre a história →",
		"featured.all": "Explorar todos os destinos →",

		// Testimonials
		"testimonials.badge": "TESTEMUNHOS",
		"testimonials.title": "O que os parceiros dizem sobre trabalhar com o Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Novas perspetivas todos os dias no @_micklas_",
		"instagram.subtitle": "Por trás da lente. Na estrada. Sem filtros.",
		"instagram.follow": "@_micklas_ no Instagram",
		"instagram.caption": "Segue para momentos que contam histórias.",

		// CTA
		"cta.title": "Vamos criar algo extraordinário juntos.",
		"cta.description":
			"Sejas uma marca, entidade de turismo ou um hotel visionário – darei vida à tua história.",
		"cta.button": "Entra em contacto",

		// About
		"about.badge": "SOBRE MIM",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas é mais do que um nome – é um convite para ver o mundo através dos meus olhos. Cada imagem conta uma história, cada viagem deixa a sua marca.",
		"about.p1":
			"Sou o Michael – conhecido como <strong>Micklas</strong> no Instagram. Há anos que vivo a minha paixão por viagens, fotografia e storytelling autêntico. Mais de 120.000 pessoas seguem-me nas minhas aventuras pelo mundo.",
		"about.p2":
			"Mais de 40 países, inúmeros horizontes. Das Ilhas Lofoten a Marraquexe – mergulho em culturas, capturo luz e emoção, e mostro o mundo com honestidade e comoção.",
		"about.p3":
			"As minhas imagens são mais do que belas fotos – são ferramentas para marcas que querem emocionar. Colaboro com entidades de turismo, hotéis e marcas de lifestyle para criar histórias visuais que deixam marca.",
		"about.p4":
			"Cada colaboração começa com uma ideia. Dela nascem imagens que cativam, inspiram e conectam. Convido-te a fazer parte destas histórias.",
		"about.stats.countries": "Países explorados",
		"about.stats.followers": "Seguidores",
		"about.stats.languages": "Alcance mensal",
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
			"Para além do enquadramento: experiências autênticas, reflexões pessoais e histórias que não encontrarás em mais lado nenhum.",
		"journal.empty": "Ainda não há histórias publicadas. Volta em breve!",
		"journal.read": "Ler a história completa →",
		"journal.back": "← Voltar ao diário",

		// Collaborate
		"collaborate.badge": "VAMOS CRIAR ALGO EXTRAORDINÁRIO",
		"collaborate.title": "Colabora com o Micklas",
		"collaborate.subtitle":
			"Tu tens uma visão – eu tenho as imagens e o alcance para a concretizar. Campanha, evento ou identidade de marca: estou ansioso por conhecer a tua ideia.",
		"collaborate.name": "O teu nome *",
		"collaborate.email": "Endereço de e-mail *",
		"collaborate.company": "Empresa / Organização",
		"collaborate.message": "Fala-me sobre o teu projeto *",
		"collaborate.placeholder.name": "Ana Silva",
		"collaborate.placeholder.email": "ana@marca.pt",
		"collaborate.placeholder.company": "A tua empresa ou organização",
		"collaborate.placeholder.message":
			"Estamos a planear uma campanha nos Alpes e procuramos um fotógrafo com genuína paixão por viagens...",
		"collaborate.consent":
			"Concordo que os meus dados (nome, e-mail, empresa, mensagem) sejam processados pela Micklas Travels para responder ao meu pedido. Os dados serão armazenados por um máximo de 6 meses e não serão partilhados com terceiros. Posso revogar este consentimento a qualquer momento enviando um e-mail para hello@micklas.travel.",
		"collaborate.privacy": "Para mais informações, lê a nossa",
		"collaborate.submit": "Enviar pedido",
		"collaborate.sending": "A enviar o teu pedido...",
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
		"footer.tagline": "Vive a tua viagem. Conta a tua história.",

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
		"nav.collaborate": "Bliv partner",
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
		"hero.subtitle":
			"Autentiske historier. Betagende billeder. 120k+ dedikerede følgere.",
		"hero.description":
			"Jeg forvandler rejser til uforglemmelige brandoplevelser.",
		"hero.cta.about": "Mød Micklas",
		"hero.cta.collaborate": "Bliv partner",
		"hero.scroll": "SCROL FOR AT UDFORSKE",

		// Stats
		"stats.followers": "Instagram-fællesskab",
		"stats.countries": "Udforskede lande",
		"stats.stories": "Inspirerende historier",
		"stats.languages": "Månedlig rækkevidde",

		// Featured travels
		"featured.badge": "DESTINATIONER",
		"featured.title": "Udvalgte rejser",
		"featured.subtitle":
			"De mest inspirerende rejsehistorier, fortalt gennem fotografi.",
		"featured.read": "Opdag historien →",
		"featured.all": "Udforsk alle destinationer →",

		// Testimonials
		"testimonials.badge": "UDTALELSER",
		"testimonials.title": "Hvad samarbejdspartnere siger om at arbejde med Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Friske perspektiver dagligt på @_micklas_",
		"instagram.subtitle": "Bag linsen. På vejen. Ufiltreret.",
		"instagram.follow": "@_micklas_ på Instagram",
		"instagram.caption": "Følg for øjeblikke, der fortæller historier.",

		// CTA
		"cta.title": "Lad os skabe noget ekstraordinært sammen.",
		"cta.description":
			"Uanset om du er et brand, turistorganisation eller visionært hotel – jeg bringer din historie til live.",
		"cta.button": "Tag kontakt",

		// About
		"about.badge": "OM MIG",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas er mere end et navn – det er en invitation til at se verden gennem mine øjne. Hvert billede fortæller en historie, hver rejse sætter sit præg.",
		"about.p1":
			"Jeg er Michael – kendt som <strong>Micklas</strong> på Instagram. I årevis har jeg levet min passion for rejser, fotografi og autentisk storytelling. Mere end 120.000 mennesker følger mig på mine eventyr rundt om i verden.",
		"about.p2":
			"Over 40 lande, utallige horisonter. Fra Lofoten til Marrakech – jeg dykker ned i kulturer, indfanger lys og følelser, og viser verden så ærligt og bevægende, som den er.",
		"about.p3":
			"Mine billeder er mere end små smukke optagelser – de er værktøjer for brands, der vil bevæge mennesker. Jeg samarbejder med turistorganisationer, hoteller og livsstilsbrands for at skabe visuelle historier, der gør indtryk.",
		"about.p4":
			"Hvert samarbejde starter med en idé. Fra den opstår billeder, der fanger, inspirerer og forbinder. Jeg inviterer dig til at blive en del af disse historier.",
		"about.stats.countries": "Udforskede lande",
		"about.stats.followers": "Følgere",
		"about.stats.languages": "Månedlig rækkevidde",
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
			"Bag om billedet: autentiske oplevelser, personlige indsigter og historier, du ikke finder andre steder.",
		"journal.empty":
			"Ingen offentliggjorte historier endnu. Kig tilbage snart!",
		"journal.read": "Læs hele historien →",
		"journal.back": "← Tilbage til journalen",

		// Collaborate
		"collaborate.badge": "LAD OS SKABE NOGET EKSTRAORDINÆRT",
		"collaborate.title": "Samarbejd med Micklas",
		"collaborate.subtitle":
			"Du har en vision – jeg har billederne og rækkevidden til at realisere den. Kampagne, event eller brandidentitet: jeg glæder mig til at høre din idé.",
		"collaborate.name": "Dit navn *",
		"collaborate.email": "E-mailadresse *",
		"collaborate.company": "Virksomhed / Organisation",
		"collaborate.message": "Fortæl mig om dit projekt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@brand.dk",
		"collaborate.placeholder.company": "Din virksomhed eller organisation",
		"collaborate.placeholder.message":
			"Vi planlægger en kampagne i Alperne og søger en fotograf med ægte passion for rejser...",
		"collaborate.consent":
			"Jeg accepterer, at mine data (navn, e-mail, virksomhed, besked) behandles af Micklas Travels for at besvare min henvendelse. Dataene opbevares i maksimalt 6 måneder og deles ikke med tredjeparter. Jeg kan til enhver tid tilbagekalde dette samtykke ved at sende en e-mail til hello@micklas.travel.",
		"collaborate.privacy": "For mere information, læs venligst vores",
		"collaborate.submit": "Send forespørgsel",
		"collaborate.sending": "Sender din forespørgsel...",
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
		"footer.tagline": "Lev din rejse. Fortæl din historie.",

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
		"nav.collaborate": "Bli partner",
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
		"hero.subtitle":
			"Autentiska berättelser. Hisnande bilder. 120k+ hängivna följare.",
		"hero.description":
			"Jag förvandlar resor till oförglömliga varumärkesupplevelser.",
		"hero.cta.about": "Träffa Micklas",
		"hero.cta.collaborate": "Bli partner",
		"hero.scroll": "SKROLLA FÖR ATT UTFORSKA",

		// Stats
		"stats.followers": "Instagram-community",
		"stats.countries": "Utforskade länder",
		"stats.stories": "Inspirerande berättelser",
		"stats.languages": "Månatlig räckvidd",

		// Featured travels
		"featured.badge": "DESTINATIONER",
		"featured.title": "Utvalda resor",
		"featured.subtitle":
			"De mest inspirerande reseberättelserna, berättade genom fotografi.",
		"featured.read": "Upptäck berättelsen →",
		"featured.all": "Utforska alla destinationer →",

		// Testimonials
		"testimonials.badge": "TESTIMONIALS",
		"testimonials.title": "Vad samarbetspartners säger om att samarbeta med Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Färska perspektiv dagligen på @_micklas_",
		"instagram.subtitle": "Bakom linsen. På vägen. Ofiltrerat.",
		"instagram.follow": "@_micklas_ på Instagram",
		"instagram.caption": "Följ för stunder som berättar historier.",

		// CTA
		"cta.title": "Låt oss skapa något extraordinärt tillsammans.",
		"cta.description":
			"Oavsett om du är ett varumärke, turistorganisation eller visionärt hotell – jag väcker din berättelse till liv.",
		"cta.button": "Ta kontakt",

		// About
		"about.badge": "OM MIG",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas är mer än ett namn – det är en inbjudan att se världen genom mina ögon. Varje bild berättar en historia, varje resa sätter sitt avtryck.",
		"about.p1":
			"Jag är Michael – känd som <strong>Micklas</strong> på Instagram. I åratal har jag levt min passion för resor, fotografi och autentiskt berättande. Mer än 120 000 människor följer mig på mina äventyr runt om i världen.",
		"about.p2":
			"Över 40 länder, otaliga horisonter. Från Lofoten till Marrakech – jag dyker ner i kulturer, fångar ljus och känslor, och visar världen så ärlig och rörande som den är.",
		"about.p3":
			"Mina bilder är mer än vackra tagningar – de är verktyg för varumärken som vill beröra människor. Jag samarbetar med turistorganisationer, hotell och livsstilsvarumärken för att skapa visuella berättelser som gör intryck.",
		"about.p4":
			"Varje samarbete börjar med en idé. Ur den föds bilder som fängslar, inspirerar och förbinder. Jag bjuder in dig att bli en del av dessa berättelser.",
		"about.stats.countries": "Utforskade länder",
		"about.stats.followers": "Följare",
		"about.stats.languages": "Månatlig räckvidd",
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
			"Bortom bilden: autentiska upplevelser, personliga insikter och berättelser du inte hittar någon annanstans.",
		"journal.empty": "Inga publicerade berättelser än. Kom tillbaka snart!",
		"journal.read": "Läs hela berättelsen →",
		"journal.back": "← Tillbaka till journalen",

		// Collaborate
		"collaborate.badge": "LÅT OSS SKAPA NÅGOT EXTRAORDINÄRT",
		"collaborate.title": "Samarbeta med Micklas",
		"collaborate.subtitle":
			"Du har en vision – jag har bilderna och räckvidden att förverkliga den. Kampanj, event eller varumärkesidentitet: jag ser fram emot att höra din idé.",
		"collaborate.name": "Ditt namn *",
		"collaborate.email": "E-postadress *",
		"collaborate.company": "Företag / Organisation",
		"collaborate.message": "Berätta om ditt projekt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@varumarke.se",
		"collaborate.placeholder.company": "Ditt företag eller organisation",
		"collaborate.placeholder.message":
			"Vi planerar en kampanj i Alperna och söker en fotograf med äkta passion för resor...",
		"collaborate.consent":
			"Jag godkänner att mina data (namn, e-post, företag, meddelande) behandlas av Micklas Travels för att besvara min förfrågan. Uppgifterna lagras i högst 6 månader och delas inte med tredje part. Jag kan återkalla detta samtycke när som helst genom att mejla hello@micklas.travel.",
		"collaborate.privacy": "För mer information, läs vår",
		"collaborate.submit": "Skicka förfrågan",
		"collaborate.sending": "Skickar din förfrågan...",
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
		"footer.tagline": "Lev din resa. Berätta din historia.",

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
		"nav.collaborate": "Bli partner",
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
		"hero.subtitle":
			"Autentiske historier. Fantastiske bilder. 120k+ dedikerte følgere.",
		"hero.description":
			"Jeg forvandler reiser til uforglemmelige merkevareopplevelser.",
		"hero.cta.about": "Møt Micklas",
		"hero.cta.collaborate": "Bli partner",
		"hero.scroll": "RULL FOR Å UTFORSKE",

		// Stats
		"stats.followers": "Instagram-fellesskap",
		"stats.countries": "Utforskede land",
		"stats.stories": "Inspirerende historier",
		"stats.languages": "Månedlig rekkevidde",

		// Featured travels
		"featured.badge": "DESTINASJONER",
		"featured.title": "Utvalgte reiser",
		"featured.subtitle":
			"De mest inspirerende reisehistoriene, fortalt gjennom fotografi.",
		"featured.read": "Oppdag historien →",
		"featured.all": "Utforsk alle destinasjoner →",

		// Testimonials
		"testimonials.badge": "ANBEFALINGER",
		"testimonials.title": "Hva samarbeidspartnere sier om å samarbeide med Micklas",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Friske perspektiver daglig på @_micklas_",
		"instagram.subtitle": "Bak linsen. På veien. Ufiltrert.",
		"instagram.follow": "@_micklas_ på Instagram",
		"instagram.caption": "Følg for øyeblikk som forteller historier.",

		// CTA
		"cta.title": "La oss skape noe ekstraordinært sammen.",
		"cta.description":
			"Enten du er en merkevare, turistforening eller et visjonært hotell – jeg gir historien din liv.",
		"cta.button": "Ta kontakt",

		// About
		"about.badge": "OM MEG",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas er mer enn et navn – det er en invitasjon til å se verden gjennom øynene mine. Hvert bilde forteller en historie, hver reise setter sitt preg.",
		"about.p1":
			"Jeg er Michael – kjent som <strong>Micklas</strong> på Instagram. I årevis har jeg levd lidenskapen min for reiser, fotografi og autentisk historiefortelling. Mer enn 120 000 mennesker følger meg på eventyrene mine rundt om i verden.",
		"about.p2":
			"Over 40 land, utallige horisonter. Fra Lofoten til Marrakech – jeg dykker ned i kulturer, fanger lys og følelser, og viser verden så ærlig og rørende som den er.",
		"about.p3":
			"Bildene mine er mer enn vakre opptak – de er verktøy for merkevarer som vil berøre mennesker. Jeg samarbeider med turistforeninger, hoteller og livsstilsmerkevarer for å skape visuelle historier som gjør inntrykk.",
		"about.p4":
			"Hvert samarbeid starter med en idé. Fra den oppstår bilder som fengsler, inspirerer og forbinder. Jeg inviterer deg til å bli en del av disse historiene.",
		"about.stats.countries": "Utforskede land",
		"about.stats.followers": "Følgere",
		"about.stats.languages": "Månedlig rekkevidde",
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
			"Bak bildet: autentiske opplevelser, personlige innsikter og historier du ikke finner noe annet sted.",
		"journal.empty": "Ingen publiserte historier ennå. Kom tilbake snart!",
		"journal.read": "Les hele historien →",
		"journal.back": "← Tilbake til journalen",

		// Collaborate
		"collaborate.badge": "LA OSS SKAPE NOE EKSTRAORDINÆRT",
		"collaborate.title": "Samarbeid med Micklas",
		"collaborate.subtitle":
			"Du har en visjon – jeg har bildene og rekkevidden til å realisere den. Kampanje, event eller merkevareidentitet: jeg gleder meg til å høre ideen din.",
		"collaborate.name": "Ditt navn *",
		"collaborate.email": "E-postadresse *",
		"collaborate.company": "Bedrift / Organisasjon",
		"collaborate.message": "Fortell meg om prosjektet ditt *",
		"collaborate.placeholder.name": "Anna Schmidt",
		"collaborate.placeholder.email": "anna@merkevare.no",
		"collaborate.placeholder.company": "Din bedrift eller organisasjon",
		"collaborate.placeholder.message":
			"Vi planlegger en kampanje i Alpene og søker en fotograf med ekte lidenskap for reiser...",
		"collaborate.consent":
			"Jeg godtar at mine data (navn, e-post, bedrift, melding) behandles av Micklas Travels for å svare på min henvendelse. Dataene lagres i maksimalt 6 måneder og deles ikke med tredjeparter. Jeg kan når som helst trekke tilbake dette samtykket ved å sende en e-post til hello@micklas.travel.",
		"collaborate.privacy": "For mer informasjon, les vår",
		"collaborate.submit": "Send forespørsel",
		"collaborate.sending": "Sender forespørselen din...",
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
		"footer.tagline": "Lev reisen din. Fortell historien din.",

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
		"nav.collaborate": "Postani partner",
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
		"hero.subtitle":
			"Autentične priče. Zadivljujuće slike. 120k+ predanih pratilaca.",
		"hero.description":
			"Pretvaram putovanja u nezaboravna iskustva za brendove.",
		"hero.cta.about": "Upoznajte Micklasa",
		"hero.cta.collaborate": "Postani partner",
		"hero.scroll": "SKROLUJTE DA ISTRAŽITE",

		// Stats
		"stats.followers": "Instagram zajednica",
		"stats.countries": "Istražene zemlje",
		"stats.stories": "Inspirativne priče",
		"stats.languages": "Mjesečni doseg",

		// Featured travels
		"featured.badge": "DESTINACIJE",
		"featured.title": "Istaknuta putovanja",
		"featured.subtitle":
			"Najinspirativnije putopisne priče, ispričane kroz fotografiju.",
		"featured.read": "Otkrijte priču →",
		"featured.all": "Istražite sve destinacije →",

		// Testimonials
		"testimonials.badge": "PREPORUKE",
		"testimonials.title": "Šta partneri kažu o saradnji sa Micklasom",

		// Instagram
		"instagram.badge": "INSTAGRAM",
		"instagram.title": "Svježe perspektive svakodnevno na @_micklas_",
		"instagram.subtitle": "Iza objektiva. Na putu. Bez filtera.",
		"instagram.follow": "@_micklas_ na Instagramu",
		"instagram.caption": "Zapratite za trenutke koji pričaju priče.",

		// CTA
		"cta.title": "Hajde da zajedno stvorimo nešto izuzetno.",
		"cta.description":
			"Bilo da ste brend, turistička organizacija ili vizionarski hotel – oživjeću vašu priču.",
		"cta.button": "Stupite u kontakt",

		// About
		"about.badge": "O MENI",
		"about.title": "Micklas Travels",
		"about.subtitle":
			"Micklas je više od imena – to je poziv da vidite svijet kroz moje oči. Svaka slika priča priču, svako putovanje ostavlja trag.",
		"about.p1":
			"Ja sam Michael – poznat kao <strong>Micklas</strong> na Instagramu. Godinama živim svoju strast prema putovanjima, fotografiji i autentičnom pripovijedanju. Više od 120.000 ljudi me prati na mojim avanturama širom svijeta.",
		"about.p2":
			"Preko 40 zemalja, bezbroj horizonata. Od Lofotena do Marakeša – uranjam u kulture, hvatam svjetlost i emocije, i pokazujem svijet onako kako jeste – iskreno i dirljivo.",
		"about.p3":
			"Moje slike su više od lijepih kadrova – one su alati za brendove koji žele da pokrenu ljude. Sarađujem sa turističkim organizacijama, hotelima i lifestyle brendovima kako bih stvorio vizuelne priče koje ostavljaju utisak.",
		"about.p4":
			"Svaka saradnja počinje idejom. Iz nje nastaju slike koje oduševljavaju, inspirišu i povezuju. Pozivam vas da postanete dio ovih priča.",
		"about.stats.countries": "Istražene zemlje",
		"about.stats.followers": "Pratioci",
		"about.stats.languages": "Mjesečni doseg",
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
			"Iza kadra: autentična iskustva, lični uvidi i priče koje nećete naći nigdje drugdje.",
		"journal.empty": "Još nema objavljenih priča. Provjerite uskoro!",
		"journal.read": "Pročitajte cijelu priču →",
		"journal.back": "← Nazad u dnevnik",

		// Collaborate
		"collaborate.badge": "HAJDE DA STVORIMO NEŠTO IZUZETNO",
		"collaborate.title": "Sarađujte sa Micklasom",
		"collaborate.subtitle":
			"Vi imate viziju – ja imam slike i doseg da je ostvarim. Kampanja, događaj ili identitet brenda: radujem se da čujem vašu ideju.",
		"collaborate.name": "Vaše ime *",
		"collaborate.email": "E-mail adresa *",
		"collaborate.company": "Kompanija / Organizacija",
		"collaborate.message": "Recite mi nešto o svom projektu *",
		"collaborate.placeholder.name": "Ana Petrović",
		"collaborate.placeholder.email": "ana@brend.me",
		"collaborate.placeholder.company": "Vaša kompanija ili organizacija",
		"collaborate.placeholder.message":
			"Planiramo kampanju u Alpima i tražimo fotografa sa istinskom strašću za putovanja...",
		"collaborate.consent":
			"Saglasan/na sam da moji podaci (ime, e-mail, kompanija, poruka) budu obrađeni od strane Micklas Travels kako bi odgovorili na moj upit. Podaci će se čuvati najviše 6 mjeseci i neće se dijeliti sa trećim licima. Mogu povući ovu saglasnost u bilo kom trenutku slanjem e-maila na hello@micklas.travel.",
		"collaborate.privacy": "Za više informacija, pročitajte našu",
		"collaborate.submit": "Pošaljite upit",
		"collaborate.sending": "Slanje upita...",
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
		"footer.tagline": "Živite svoje putovanje. Ispričajte svoju priču.",

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
