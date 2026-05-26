export default function ImpressumPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 prose prose-xl text-gray-700">
      <h1 className="text-6xl font-bold tracking-tight text-brand-navy mb-12">Impressum</h1>

      <h2>Angaben gemäß § 5 TMG</h2>
      
      <p>
        Michael Glashauser<br />
        Micklas Travels<br />
        [Ihre Adresse]<br />
        [PLZ Ort]<br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: [Ihre Telefonnummer]<br />
        E-Mail: <a href="mailto:hello@micklas.travel">hello@micklas.travel</a>
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
        [Ihre USt-ID, falls vorhanden]
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        Michael Glashauser<br />
        [Ihre Adresse]
      </p>

      <h2>Haftungsausschluss</h2>
      
      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
      </p>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <div className="mt-16 pt-8 border-t text-sm text-gray-500">
        Stand: Mai 2026
      </div>
    </div>
  )
}