/* =========================================================
   DJ Playlist Companion — Beta landing page
   All visible copy lives in CONFIG.i18n (English + German).
   Nothing else has to be touched to change wording.
   ========================================================= */

/* ---------------------------------------------------------
   1) The only link you may want to replace later.
      Leave "" to point every button at the latest GitHub release.
   --------------------------------------------------------- */
const DOWNLOAD_URL = "";

/* Fallback target while DOWNLOAD_URL is empty. */
const RELEASES_URL = "https://github.com/tintronik/DJ-Playlist-Companion-Beta/releases/latest";

const CONFIG = {
  defaultLang: "en",
  storageKey: "dpc-lang",
  youtubeId: "6UIPTuI5QEQ",

  i18n: {
    en: {
      meta: {
        title: "DJ Playlist Companion — Beta for Engine DJ Libraries",
        description:
          "DJ Playlist Companion helps Engine DJ users organize, clean, analyze and manage large music collections faster: set arranger, batch metadata cleanup, duplicate cleaner, track relocator and automatic backups."
      },
      a11y: {
        skip: "Skip to main content"
      },
      nav: {
        label: "Main navigation",
        menu: "Open menu",
        langLabel: "Language",
        toTop: "Back to top",
        howItWorks: "How It Works",
        features: "Features",
        demo: "Demo",
        download: "Download",
        faq: "FAQ",
        cta: "Download Beta"
      },
      hero: {
        eyebrow: "Open Beta · Windows 10 & 11",
        title: "Stop Fighting Your Music Library.",
        subtitle:
          "DJ Playlist Companion helps Engine DJ users organize, clean, analyze and manage large music collections faster and more efficiently.",
        ctaPrimary: "Download Beta",
        ctaSecondary: "Watch Demo",
        trust1: "Free during the 120-day beta",
        trust2: "Engine DJ 3.x, 4.x & 5.0+",
        trust3: "No telemetry — your data stays local",
        trust4: "Automatic backup before every change",
        imageAlt:
          "DJ Playlist Companion start screen showing the Engine DJ library overview",
        devices:
          "Built for Engine DJ libraries used on Denon SC LIVE, Prime 4, Prime GO, SC6000 and Numark Mixstream Pro."
      },
      pain: {
        eyebrow: "The daily reality",
        title: "Why Engine DJ Users Need More",
        subtitle:
          "Engine DJ plays your music. Managing thousands of tracks is a different job — and it is still manual work.",
        items: [
          {
            title: "Manual playlist organisation",
            text: "Building playlists track by track, again and again — with no overview of which track already sits in which playlist."
          },
          {
            title: "Missing bulk editing tools",
            text: "Renaming genres, artists or titles one entry at a time. Even a small cleanup turns into an evening of clicking."
          },
          {
            title: "Slow metadata management",
            text: "Typos, mixed spellings and inconsistent capitalisation spread until filters and search stop being reliable."
          },
          {
            title: "Repetitive library maintenance",
            text: "The same routine every few weeks: hunting duplicates, repairing paths, tidying genres. Time you would rather spend mixing."
          },
          {
            title: "Difficult large collection management",
            text: "The more tracks you own, the harder it gets to keep an overview — and on a device screen every extra step really hurts."
          },
          {
            title: "Lack of advanced productivity features",
            text: "No set planning by target duration, no energy flow, no history search, no quick preview. Engine DJ simply leaves these gaps."
          }
        ]
      },
      solution: {
        eyebrow: "The solution",
        title: "Built to Solve These Problems",
        subtitle:
          "Every tool works directly on your existing Engine DJ database — and the companion backs up your library before it writes anything.",
        items: [
          {
            kicker: "Batch editing",
            title: "Clean up genres and artists in one pass",
            text: "The Genre Manager and Artist Manager group spelling variants, typos and inconsistent capitalisation, then apply one corrected value to all affected tracks at once. A–Z jump bars take you straight to the entry you are looking for.",
            alt: "Genre Manager grouping spelling variants for batch cleanup",
            bullets: [
              "Unify spellings such as DnB → Drum & Bass",
              "Correct artist names including accents and umlauts",
              "Preview every change before you save it"
            ],
            image: "assets/screenshots/03-genre-manager.png"
          },
          {
            kicker: "Faster playlist management",
            title: "Build sets that actually flow",
            text: "The Set-Arranger plans your playlist around a harmonic key flow and a BPM curve. Pick a tension profile such as The Wave, Progressive Ramp or Peak-Time and let the companion order the tracks for you.",
            alt: "Set-Arranger optimising BPM and harmonic key flow",
            bullets: [
              "Harmonic key flow and BPM analysis across the set",
              "Tension profiles for warm-up, peak time and closing",
              "Drag & drop set preparation with instant feedback"
            ],
            image: "assets/screenshots/02-set-arranger.png"
          },
          {
            kicker: "Metadata enhancements",
            title: "Know which track sits in which playlist",
            text: "Every track shows the playlists it belongs to, and the duplicate cleaner finds the same track in several places — so you can see what is missing from your sets instead of guessing.",
            alt: "Library overview listing tracks and their playlist membership",
            bullets: [
              "Playlist membership per track at a glance",
              "Duplicate cleaner for tracks and spelling variants",
              "Instant switch between PC and USB libraries"
            ],
            image: "assets/screenshots/01-start.png"
          },
          {
            kicker: "Library optimization",
            title: "Find tracks that moved or disappeared",
            text: "The Smart Track Relocator scans your drives for tracks Engine DJ can no longer find and suggests the correct path. It repairs the database entries instead of forcing a full re-import.",
            alt: "Smart Track-Relocator listing missing files with suggested paths",
            bullets: [
              "Detects missing or moved audio files",
              "Suggests matches by name, folder and file size",
              "Repairs library entries in a single run"
            ],
            image: "assets/screenshots/05-track-relocator.png"
          },
          {
            kicker: "Workflow automation",
            title: "Turn your played history into next week's set",
            text: "Set-History lists past sessions, so you can search what you played and export it as a playlist in one click. Playlist Autofill fills a new playlist by target duration or track count — filtered by BPM range, energy level, genre and rating.",
            alt: "Set-History view with played sessions and playlist export",
            bullets: [
              "Search your played setlists and gig history",
              "Autofill by set duration or number of tracks",
              "Filters for BPM range, energy, genre and rating"
            ],
            image: "assets/screenshots/04-set-history.png"
          },
          {
            kicker: "Custom DJ productivity tools",
            title: "Preview, protect and move on",
            text: "The built-in CUE Player auditions tracks without leaving the companion — space bar to play, arrow keys to scrub. And every permanent change is preceded by an automatic backup of your library.",
            alt: "CUE-Player previewing a track with playback controls",
            bullets: [
              "CUE Player with space bar and arrow key control",
              "Automatic safety backups before every change",
              "No telemetry — nothing leaves your machine"
            ],
            image: "assets/screenshots/06-cue-player.png"
          }
        ]
      },
      video: {
        eyebrow: "Video demonstration",
        title: "See It In Action",
        text: "A short walkthrough of the companion: library overview, Set-Arranger, cleanup tools and writing the result back into Engine DJ.",
        play: "Watch the demo",
        playLabel: "Play the demo video",
        iframeTitle: "Video demo of DJ Playlist Companion",
        note: "The video is hosted on YouTube and only loads after you click play — nothing is requested before that."
      },
      gallery: {
        eyebrow: "Screenshot showcase",
        title: "Take a Closer Look",
        subtitle:
          "Six screens from the current beta build — everything runs on your own machine, completely offline.",
        prev: "Previous",
        next: "Next",
        dotsLabel: "Choose screenshot",
        goTo: "Show screenshot {index}: {title}",
        statusFormat: "{index} / {total} · {title}",
        items: [
          {
            index: "01",
            title: "Library overview",
            text: "Your whole Engine DJ collection with playlists, BPM, key and duration in one window.",
            alt: "Start screen with collection overview and playlist tree",
            image: "assets/screenshots/01-start.png"
          },
          {
            index: "02",
            title: "Set-Arranger",
            text: "Plan a set by duration or track count and optimise the tension curve automatically.",
            alt: "Set-Arranger planning a playlist with tension profiles",
            image: "assets/screenshots/02-set-arranger.png"
          },
          {
            index: "03",
            title: "Genre Manager",
            text: "Group spelling variants and unify them in a single pass instead of editing track by track.",
            alt: "Genre Manager with grouped spelling variants",
            image: "assets/screenshots/03-genre-manager.png"
          },
          {
            index: "04",
            title: "Set-History",
            text: "Review played sessions, search your setlist and turn a gig into a new playlist.",
            alt: "Set-History with played sessions and search",
            image: "assets/screenshots/04-set-history.png"
          },
          {
            index: "05",
            title: "Smart Track Relocator",
            text: "Reconnect tracks that moved to another folder, drive or USB stick.",
            alt: "Smart Track-Relocator with suggested file paths",
            image: "assets/screenshots/05-track-relocator.png"
          },
          {
            index: "06",
            title: "CUE Player",
            text: "Audition tracks quickly before they land in your set — with keyboard control.",
            alt: "CUE-Player with playback and scrubbing controls",
            image: "assets/screenshots/06-cue-player.png"
          }
        ]
      },
      how: {
        eyebrow: "How it works",
        title: "Three Steps to a Cleaner Library",
        subtitle:
          "No migration and no re-import of your music — the companion works with the library you already have.",
        steps: [
          {
            title: "Import and review your library",
            text: "Point the companion at your Engine Library folder — on your PC, a USB stick or an external SSD. It reads the existing Engine DJ database and shows your collection exactly as it is today. Nothing is changed at this point."
          },
          {
            title: "Apply advanced management tools",
            text: "Use the Set-Arranger, the duplicate cleaner, the genre and artist managers, the track relocator and the history search to clean up and plan your sets. Every permanent change is backed up before it happens."
          },
          {
            title: "Export and enjoy a cleaner workflow",
            text: "Write the cleaned playlists back into the Engine DJ database or export them as .m3u files — then carry on with your players exactly as before."
          }
        ]
      },
      beta: {
        eyebrow: "Beta program",
        title: "Join the Beta Program",
        text: "DJ Playlist Companion is in beta: every function is unlocked, there are no track limits, and your feedback directly shapes what gets built next.",
        cta: "Download Latest Beta",
        ctaSecondary: "Report a bug",
        note: 'Windows 10/11 (64 bit). The build is not code-signed yet, so Windows SmartScreen may warn you — choose "More info" → "Run anyway".',
        points: [
          {
            title: "120 days, full feature set",
            text: "The test period starts with your first launch. All tools, no limits — no account and no credit card required."
          },
          {
            title: "Feedback is welcome",
            text: "Report bugs or share ideas in GitHub issues and discussions. Real-world libraries are the most valuable test material."
          },
          {
            title: "Actively developed",
            text: "Fresh builds appear in the releases section together with notes on what changed in each version."
          },
          {
            title: "Safety first",
            text: "The companion backs up your library before permanent changes — and please still keep your own backup while testing."
          }
        ]
      },
      faq: {
        eyebrow: "Questions & answers",
        title: "Frequently Asked Questions",
        items: [
          {
            q: "What is DJ Playlist Companion?",
            a: "A desktop companion for your Engine DJ library. It organises playlists, cleans up metadata in bulk, plans sets, relocates missing tracks and keeps automatic backups — all directly on your existing Engine DJ database. It is an independent tool, not affiliated with inMusic Brands Inc. or Denon DJ."
          },
          {
            q: "Does it modify my music files?",
            a: "No. Your audio files are never touched. Changes only happen in the Engine DJ database (m.db), and only when you press save. Before every permanent change the companion creates a backup of your library so you can roll back. As with any beta, please keep your own backup of the library as well."
          },
          {
            q: "Is Engine DJ required?",
            a: "No. Engine DJ does not have to be installed — an existing Engine Library (database) on your PC, a USB stick or an external SSD is enough. Keep Engine DJ closed while saving, otherwise the database files can be locked."
          },
          {
            q: "Is the software free during beta?",
            a: "Yes. The beta is free and runs for 120 days with the full feature set and without track limits. After that the app switches to read-only mode: viewing, set planning, audio analysis and backups remain available, saving requires activation. Nothing gets deleted, and a Pro licence is in preparation."
          },
          {
            q: "How can I provide feedback?",
            a: "Bugs and ideas are collected on GitHub: open an issue with the prepared bug template, or join the discussions for questions and exchange with other testers. Log files live in %LOCALAPPDATA%\\DJ Playlist Companion\\logs — please check them for personal file paths before uploading."
          }
        ]
      },
      final: {
        title: "Take Control Of Your Engine DJ Library",
        text: "Join the beta and get a cleaner, faster workflow on the hardware you already own.",
        cta: "Download Beta Now",
        note: "Free during the beta · Windows 10/11 · No account required"
      },
      footer: {
        tagline: "Independent software for Engine DJ libraries. Built for DJs who would rather mix than click.",
        sections: "Sections",
        project: "Project",
        docs: "Documentation",
        releases: "Releases & downloads",
        bugs: "Report a bug",
        discussions: "Discussions",
        checksums: "SHA256 checksums",
        installation: "Installation guide",
        faq: "FAQ (German)",
        testGuide: "Beta test guide (German)",
        privacy: "Privacy (German)",
        eula: "Licence (EULA)",
        disclaimer:
          "DJ Playlist Companion is an independent software project and is not affiliated with inMusic Brands Inc. or Denon DJ. Engine DJ, Engine OS and Denon DJ are registered trademarks of inMusic Brands Inc.",
        copyright: "© 2026 Tintronik · DJ Playlist Companion. All rights reserved."
      }
    },
    de: {
      meta: {
        title: "DJ Playlist Companion — Beta für Engine-DJ-Bibliotheken",
        description:
          "DJ Playlist Companion hilft Engine-DJ-Nutzern, große Musiksammlungen schneller zu organisieren, zu bereinigen, zu analysieren und zu verwalten: Set-Arranger, Massen-Bearbeitung, Dubletten-Cleaner, Track-Relocator und automatische Backups."
      },
      a11y: {
        skip: "Zum Hauptinhalt springen"
      },
      nav: {
        label: "Hauptnavigation",
        menu: "Menü öffnen",
        langLabel: "Sprache",
        toTop: "Nach oben",
        howItWorks: "So funktioniert's",
        features: "Funktionen",
        demo: "Demo",
        download: "Download",
        faq: "FAQ",
        cta: "Beta herunterladen"
      },
      hero: {
        eyebrow: "Offene Beta · Windows 10 & 11",
        title: "Schluss mit dem Kampf gegen deine Musiksammlung.",
        subtitle:
          "DJ Playlist Companion hilft Engine-DJ-Nutzern, große Musiksammlungen schneller und effizienter zu organisieren, zu bereinigen, zu analysieren und zu verwalten.",
        ctaPrimary: "Beta herunterladen",
        ctaSecondary: "Demo ansehen",
        trust1: "Kostenlos in der 120-Tage-Beta",
        trust2: "Engine DJ 3.x, 4.x & 5.0+",
        trust3: "Keine Telemetrie — deine Daten bleiben lokal",
        trust4: "Automatisches Backup vor jeder Änderung",
        imageAlt:
          "Startbildschirm von DJ Playlist Companion mit der Übersicht der Engine-DJ-Bibliothek",
        devices:
          "Gebaut für Engine-DJ-Bibliotheken auf Denon SC LIVE, Prime 4, Prime GO, SC6000 und Numark Mixstream Pro."
      },
      pain: {
        eyebrow: "Der Alltag",
        title: "Warum Engine-DJ-Nutzer mehr brauchen",
        subtitle:
          "Engine DJ spielt deine Musik. Tausende Tracks zu verwalten ist eine andere Aufgabe — und bis heute Handarbeit.",
        items: [
          {
            title: "Manuelle Playlist-Organisation",
            text: "Playlists Track für Track zusammenklicken — und kein Überblick darüber, welcher Track schon in welcher Playlist liegt."
          },
          {
            title: "Fehlende Massen-Bearbeitung",
            text: "Genres, Artists oder Titel einzeln umbenennen. Schon ein kleines Aufräumen kostet einen ganzen Abend."
          },
          {
            title: "Langsames Metadaten-Management",
            text: "Tippfehler, gemischte Schreibweisen und uneinheitliche Groß-/Kleinschreibung breiten sich aus, bis Filter und Suche unzuverlässig werden."
          },
          {
            title: "Repetitive Bibliothekspflege",
            text: "Alle paar Wochen dieselbe Routine: Dubletten suchen, Pfade reparieren, Genres sortieren. Zeit, die du lieber am Pult verbringst."
          },
          {
            title: "Große Sammlungen kaum beherrschbar",
            text: "Je mehr Tracks du hast, desto schwerer bleibt der Überblick — und auf einem Gerätedisplay tut jeder zusätzliche Klick weh."
          },
          {
            title: "Keine Profi-Produktivitätsfunktionen",
            text: "Keine Set-Planung nach Zieldauer, kein Energy-Verlauf, keine Suche in der Historie, keine schnelle Vorhörfunktion. Engine DJ lässt diese Lücken offen."
          }
        ]
      },
      solution: {
        eyebrow: "Die Lösung",
        title: "Gebaut, um genau das zu lösen",
        subtitle:
          "Jedes Werkzeug arbeitet direkt auf deiner bestehenden Engine-DJ-Datenbank — und vor dem Schreiben legt der Companion automatisch ein Backup deiner Bibliothek an.",
        items: [
          {
            kicker: "Massen-Bearbeitung",
            title: "Genres und Artists in einem Durchgang aufräumen",
            text: "Genre-Manager und Artist-Manager gruppieren Schreibvarianten, Tippfehler und uneinheitliche Groß-/Kleinschreibung und schreiben dann einen korrigierten Wert auf alle betroffenen Tracks. A–Z-Sprungleisten bringen dich sofort zum gesuchten Eintrag.",
            alt: "Genre-Manager mit gruppierten Schreibvarianten für die Massen-Korrektur",
            bullets: [
              "Schreibweisen vereinheitlichen, z. B. DnB → Drum & Bass",
              "Artist-Namen inklusive Akzenten und Umlauten korrigieren",
              "Jede Änderung vor dem Speichern prüfen"
            ],
            image: "assets/screenshots/03-genre-manager.png"
          },
          {
            kicker: "Schnellere Playlist-Verwaltung",
            title: "Sets, die wirklich fließen",
            text: "Der Set-Arranger plant deine Playlist entlang eines harmonischen Key-Flows und einer BPM-Kurve. Wähle ein Spannungsprofil wie „The Wave“, „Progressive Ramp“ oder „Peak-Time“ — der Companion sortiert die Tracks für dich.",
            alt: "Set-Arranger mit BPM- und Harmonic-Key-Flow-Optimierung",
            bullets: [
              "Harmonischer Key-Flow und BPM-Analyse über das ganze Set",
              "Spannungsprofile für Warm-up, Peak-Time und Closing",
              "Set-Vorbereitung per Drag & Drop mit direkter Rückmeldung"
            ],
            image: "assets/screenshots/02-set-arranger.png"
          },
          {
            kicker: "Mehr Metadaten-Überblick",
            title: "Wisse, welcher Track in welcher Playlist liegt",
            text: "Jeder Track zeigt seine Playlists, und der Dubletten-Cleaner findet denselben Track an mehreren Stellen — so siehst du, was in deinen Sets fehlt, statt zu raten.",
            alt: "Bibliotheksübersicht mit Tracks und ihrer Playlist-Zugehörigkeit",
            bullets: [
              "Playlist-Zugehörigkeit pro Track auf einen Blick",
              "Dubletten-Cleaner für Tracks und Schreibvarianten",
              "Schneller Wechsel zwischen PC- und USB-Bibliothek"
            ],
            image: "assets/screenshots/01-start.png"
          },
          {
            kicker: "Bibliotheks-Optimierung",
            title: "Finde Tracks, die verschoben wurden oder fehlen",
            text: "Der Smart Track-Relocator durchsucht deine Laufwerke nach Tracks, die Engine DJ nicht mehr findet, und schlägt den passenden Pfad vor. Er repariert die Datenbankeinträge, statt einen kompletten Neu-Import zu erzwingen.",
            alt: "Smart Track-Relocator mit fehlenden Dateien und Pfadvorschlägen",
            bullets: [
              "Erkennt fehlende oder verschobene Audiodateien",
              "Schlägt Treffer nach Name, Ordner und Dateigröße vor",
              "Repariert Bibliothekseinträge in einem Durchlauf"
            ],
            image: "assets/screenshots/05-track-relocator.png"
          },
          {
            kicker: "Workflow-Automatisierung",
            title: "Mach aus deiner Set-Historie das nächste Set",
            text: "Die Set-History listet vergangene Sessions: Du suchst nach, was du gespielt hast, und exportierst es mit einem Klick als Playlist. Der Playlist-Autofill füllt eine neue Playlist nach Zieldauer oder Trackanzahl — gefiltert nach BPM-Bereich, Energy-Level, Genre und Bewertung.",
            alt: "Set-History mit gespielten Sessions und Export als Playlist",
            bullets: [
              "Gespielte Setlists und Gig-Historie durchsuchen",
              "Autofill nach Set-Dauer oder Trackanzahl",
              "Filter für BPM-Bereich, Energy, Genre und Bewertung"
            ],
            image: "assets/screenshots/04-set-history.png"
          },
          {
            kicker: "Eigene DJ-Produktivitätstools",
            title: "Vorhören, absichern, weitermachen",
            text: "Der integrierte CUE-Player lässt dich Tracks vorhören, ohne den Companion zu verlassen — Leertaste für Play, Pfeiltasten zum Spulen. Und vor jeder dauerhaften Änderung legt das Programm automatisch ein Backup deiner Bibliothek an.",
            alt: "CUE-Player beim Vorhören eines Tracks mit Wiedergabesteuerung",
            bullets: [
              "CUE-Player mit Leertaste und Pfeiltasten",
              "Automatische Sicherheits-Backups vor jeder Änderung",
              "Keine Telemetrie — nichts verlässt deinen Rechner"
            ],
            image: "assets/screenshots/06-cue-player.png"
          }
        ]
      },
      video: {
        eyebrow: "Video-Demo",
        title: "In Aktion erleben",
        text: "Ein kurzer Rundgang durch den Companion: Bibliotheksübersicht, Set-Arranger, Aufräum-Werkzeuge und das Zurückschreiben in Engine DJ.",
        play: "Demo ansehen",
        playLabel: "Demo-Video abspielen",
        iframeTitle: "Video-Demo von DJ Playlist Companion",
        note: "Das Video liegt auf YouTube und lädt erst, wenn du auf Play klickst — vorher wird nichts übertragen."
      },
      gallery: {
        eyebrow: "Screenshot-Galerie",
        title: "Ein genauer Blick",
        subtitle:
          "Sechs Ansichten aus der aktuellen Beta — alles läuft lokal auf deinem Rechner, komplett offline.",
        prev: "Zurück",
        next: "Weiter",
        dotsLabel: "Screenshot auswählen",
        goTo: "Screenshot {index} anzeigen: {title}",
        statusFormat: "{index} / {total} · {title}",
        items: [
          {
            index: "01",
            title: "Bibliotheksübersicht",
            text: "Deine komplette Engine-DJ-Sammlung mit Playlists, BPM, Tonart und Dauer in einem Fenster.",
            alt: "Startansicht mit Sammlungsübersicht und Playlist-Baum",
            image: "assets/screenshots/01-start.png"
          },
          {
            index: "02",
            title: "Set-Arranger",
            text: "Plane ein Set nach Dauer oder Trackanzahl und optimiere den Spannungsverlauf automatisch.",
            alt: "Set-Arranger beim Planen einer Playlist mit Spannungsprofilen",
            image: "assets/screenshots/02-set-arranger.png"
          },
          {
            index: "03",
            title: "Genre-Manager",
            text: "Schreibvarianten gruppieren und in einem Durchgang vereinheitlichen, statt Track für Track zu bearbeiten.",
            alt: "Genre-Manager mit gruppierten Schreibvarianten",
            image: "assets/screenshots/03-genre-manager.png"
          },
          {
            index: "04",
            title: "Set-History",
            text: "Gespielte Sessions durchsehen, die Setlist durchsuchen und einen Gig in eine neue Playlist verwandeln.",
            alt: "Set-History mit gespielten Sessions und Suche",
            image: "assets/screenshots/04-set-history.png"
          },
          {
            index: "05",
            title: "Smart Track-Relocator",
            text: "Tracks wieder verbinden, die in einen anderen Ordner, auf ein anderes Laufwerk oder einen USB-Stick verschoben wurden.",
            alt: "Smart Track-Relocator mit vorgeschlagenen Dateipfaden",
            image: "assets/screenshots/05-track-relocator.png"
          },
          {
            index: "06",
            title: "CUE-Player",
            text: "Tracks schnell vorhören, bevor sie ins Set wandern — inklusive Tastatursteuerung.",
            alt: "CUE-Player mit Wiedergabe- und Spulsteuerung",
            image: "assets/screenshots/06-cue-player.png"
          }
        ]
      },
      how: {
        eyebrow: "So funktioniert's",
        title: "In drei Schritten zur aufgeräumten Bibliothek",
        subtitle:
          "Keine Migration und kein Neu-Import deiner Musik — der Companion arbeitet mit der Bibliothek, die du bereits hast.",
        steps: [
          {
            title: "Bibliothek einlesen und prüfen",
            text: "Zeige dem Companion deinen Engine-Library-Ordner — auf dem PC, einem USB-Stick oder einer externen SSD. Er liest die bestehende Engine-DJ-Datenbank und zeigt deine Sammlung genau so, wie sie heute ist. Geändert wird dabei nichts."
          },
          {
            title: "Profi-Werkzeuge anwenden",
            text: "Nutze Set-Arranger, Dubletten-Cleaner, Genre- und Artist-Manager, Track-Relocator und Historien-Suche, um aufzuräumen und Sets zu planen. Vor jeder dauerhaften Änderung entsteht automatisch ein Backup."
          },
          {
            title: "Exportieren und entspannt weiterarbeiten",
            text: "Schreibe die aufgeräumten Playlists zurück in die Engine-DJ-Datenbank oder exportiere sie als .m3u-Dateien — danach arbeitest du wie gewohnt mit deinen Playern weiter."
          }
        ]
      },
      beta: {
        eyebrow: "Beta-Programm",
        title: "Mach beim Beta-Programm mit",
        text: "DJ Playlist Companion ist in der Beta: alle Funktionen freigeschaltet, keine Track-Limits — und dein Feedback bestimmt direkt, was als Nächstes gebaut wird.",
        cta: "Aktuelle Beta herunterladen",
        ctaSecondary: "Fehler melden",
        note: "Windows 10/11 (64 Bit). Der Build ist noch nicht signiert, daher kann Windows SmartScreen warnen — wähle „Weitere Informationen“ → „Trotzdem ausführen“.",
        points: [
          {
            title: "120 Tage, voller Funktionsumfang",
            text: "Die Testzeit startet mit dem ersten Programmstart. Alle Werkzeuge, keine Limits — ohne Konto und ohne Kreditkarte."
          },
          {
            title: "Feedback ist willkommen",
            text: "Melde Fehler oder Ideen als GitHub-Issue oder in den Discussions. Echte Sammlungen sind das wertvollste Testmaterial."
          },
          {
            title: "Aktive Weiterentwicklung",
            text: "Neue Builds erscheinen im Releases-Bereich, inklusive Notizen zu allen Änderungen."
          },
          {
            title: "Sicherheit zuerst",
            text: "Vor dauerhaften Änderungen legt der Companion ein Backup deiner Bibliothek an — bitte behalte während des Tests trotzdem ein eigenes Backup."
          }
        ]
      },
      faq: {
        eyebrow: "Fragen & Antworten",
        title: "Häufige Fragen",
        items: [
          {
            q: "Was ist DJ Playlist Companion?",
            a: "Ein Desktop-Companion für deine Engine-DJ-Bibliothek. Er organisiert Playlists, bereinigt Metadaten in großen Mengen, plant Sets, findet verschobene Tracks wieder und legt automatisch Backups an — direkt auf deiner bestehenden Engine-DJ-Datenbank. Es ist ein unabhängiges Werkzeug, ohne Verbindung zu inMusic Brands Inc. oder Denon DJ."
          },
          {
            q: "Werden meine Musikdateien verändert?",
            a: "Nein. Deine Audiodateien werden nie angetastet. Änderungen passieren ausschließlich in der Engine-DJ-Datenbank (m.db) und nur, wenn du speicherst. Vor jeder dauerhaften Änderung legt der Companion ein Backup deiner Bibliothek an, damit du zurückrollen kannst. Wie bei jeder Beta gilt trotzdem: Behalte ein eigenes Backup."
          },
          {
            q: "Muss Engine DJ installiert sein?",
            a: "Nein. Engine DJ muss nicht installiert sein — eine vorhandene Engine-Library (Datenbank) auf dem PC, einem USB-Stick oder einer externen SSD genügt. Lass Engine DJ während des Speicherns geschlossen, sonst können die Datenbankdateien gesperrt sein."
          },
          {
            q: "Ist die Software in der Beta kostenlos?",
            a: "Ja. Die Beta ist kostenlos und läuft 120 Tage mit vollem Funktionsumfang und ohne Track-Limits. Danach wechselt das Programm in den Lese-Modus: Ansehen, Set-Planung, Audioanalyse und Backups bleiben möglich, Speichern erfordert eine Freischaltung. Es wird nichts gelöscht, eine Pro-Lizenz ist in Vorbereitung."
          },
          {
            q: "Wie kann ich Feedback geben?",
            a: "Fehler und Ideen sammeln wir auf GitHub: Lege ein Issue mit der vorbereiteten Fehlervorlage an oder nutze die Discussions für Fragen und den Austausch mit anderen Testern. Protokolldateien liegen unter %LOCALAPPDATA%\\DJ Playlist Companion\\logs — prüfe sie vor dem Hochladen auf persönliche Pfade."
          }
        ]
      },
      final: {
        title: "Übernimm die Kontrolle über deine Engine-DJ-Bibliothek",
        text: "Mach bei der Beta mit und arbeite auf deiner vorhandenen Hardware schneller und aufgeräumter.",
        cta: "Jetzt Beta herunterladen",
        note: "Kostenlos in der Beta · Windows 10/11 · Kein Konto nötig"
      },
      footer: {
        tagline: "Unabhängige Software für Engine-DJ-Bibliotheken. Für DJs, die lieber auflegen als klicken.",
        sections: "Bereiche",
        project: "Projekt",
        docs: "Dokumentation",
        releases: "Releases & Downloads",
        bugs: "Fehler melden",
        discussions: "Discussions",
        checksums: "SHA256-Prüfsummen",
        installation: "Installationsanleitung",
        faq: "FAQ (Deutsch)",
        testGuide: "Beta-Testanleitung",
        privacy: "Datenschutz",
        eula: "Lizenz (EULA)",
        disclaimer:
          "DJ Playlist Companion ist ein unabhängiges Softwareprojekt und steht in keiner geschäftlichen Verbindung zu inMusic Brands Inc. oder Denon DJ. Engine DJ, Engine OS und Denon DJ sind eingetragene Warenzeichen von inMusic Brands Inc.",
        copyright: "© 2026 Tintronik · DJ Playlist Companion. Alle Rechte vorbehalten."
      }
    }
  }
};
/* =========================================================
   Helpers
   ========================================================= */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function getByPath(source, path) {
  return path.split(".").reduce((acc, key) => (acc === null || acc === undefined ? undefined : acc[key]), source);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

let currentLang = CONFIG.defaultLang;

const currentDict = () => CONFIG.i18n[currentLang] || CONFIG.i18n[CONFIG.defaultLang];

/* =========================================================
   List renderers
   Every list also exists as static English markup in index.html
   (for search engines and no-JS visitors). The markup below must
   therefore stay in sync with index.html.
   ========================================================= */

const RENDERERS = {
  "pain.items": (items) =>
    items
      .map(
        (item) => `
          <article class="card">
            <h3 class="card__title">${escapeHtml(item.title)}</h3>
            <p class="card__text">${escapeHtml(item.text)}</p>
          </article>`
      )
      .join(""),

  "solution.items": (items) =>
    items
      .map(
        (item) => `
          <article class="feature">
            <figure class="feature__media">
              <img src="${escapeHtml(item.image)}" width="1920" height="1032" alt="${escapeHtml(item.alt)}"
                   loading="lazy" decoding="async">
            </figure>
            <div class="feature__body">
              <p class="feature__kicker">${escapeHtml(item.kicker)}</p>
              <h3 class="feature__title">${escapeHtml(item.title)}</h3>
              <p class="feature__text">${escapeHtml(item.text)}</p>
              <ul class="feature__list">
                ${item.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
              </ul>
            </div>
          </article>`
      )
      .join(""),

  "gallery.items": (items) =>
    items
      .map(
        (item) => `
          <li class="slide">
            <figure class="slide__figure">
              <img src="${escapeHtml(item.image)}" width="1920" height="1032" alt="${escapeHtml(item.alt)}"
                   loading="lazy" decoding="async">
            </figure>
            <div class="slide__meta">
              <p class="slide__index">${escapeHtml(item.index)}</p>
              <h3 class="slide__title">${escapeHtml(item.title)}</h3>
              <p class="slide__text">${escapeHtml(item.text)}</p>
            </div>
          </li>`
      )
      .join(""),

  "how.steps": (items) =>
    items
      .map(
        (item, index) => `
          <li class="step">
            <p class="step__num" aria-hidden="true">${index + 1}</p>
            <h3 class="step__title">${escapeHtml(item.title)}</h3>
            <p class="step__text">${escapeHtml(item.text)}</p>
          </li>`
      )
      .join(""),

  "beta.points": (items) =>
    items
      .map(
        (item) => `
          <li class="point">
            <h3 class="point__title">${escapeHtml(item.title)}</h3>
            <p class="point__text">${escapeHtml(item.text)}</p>
          </li>`
      )
      .join(""),

  "faq.items": (items) =>
    items
      .map((item, index) => {
        const id = index + 1;
        return `
          <div class="faq__item">
            <h3 class="faq__heading">
              <button class="faq__trigger" type="button" id="faq-trigger-${id}"
                      aria-expanded="false" aria-controls="faq-panel-${id}">
                <span class="faq__question">${escapeHtml(item.q)}</span>
                <span class="faq__icon" aria-hidden="true"></span>
              </button>
            </h3>
            <div class="faq__panel" id="faq-panel-${id}" role="region" aria-labelledby="faq-trigger-${id}">
              <div class="faq__panel-inner">
                <p class="faq__answer">${escapeHtml(item.a)}</p>
              </div>
            </div>
          </div>`;
      })
      .join("")
};
/* =========================================================
   Language handling
   ========================================================= */

function applyTranslations(lang) {
  const dict = CONFIG.i18n[lang] ? CONFIG.i18n[lang] : CONFIG.i18n[CONFIG.defaultLang];
  currentLang = lang;

  $$("[data-i18n]").forEach((node) => {
    const value = getByPath(dict, node.getAttribute("data-i18n"));
    if (typeof value === "string") node.textContent = value;
  });

  $$("[data-i18n-attr]").forEach((node) => {
    node
      .getAttribute("data-i18n-attr")
      .split(";")
      .forEach((pair) => {
        const parts = pair.split(":");
        const attr = parts[0] ? parts[0].trim() : "";
        const path = parts[1] ? parts[1].trim() : "";
        if (!attr || !path) return;
        const value = getByPath(dict, path);
        if (typeof value === "string") node.setAttribute(attr, value);
      });
  });

  $$("[data-list]").forEach((container) => {
    const key = container.getAttribute("data-list");
    const render = RENDERERS[key];
    const items = getByPath(dict, key);
    if (render && Array.isArray(items)) container.innerHTML = render(items);
  });

  document.title = dict.meta.title;
  const description = $('meta[name="description"]');
  if (description) description.setAttribute("content", dict.meta.description);

  document.documentElement.lang = lang;
  $$(".lang__btn").forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang)));

  galleryResync();
}

function setLang(lang) {
  const next = CONFIG.i18n[lang] ? lang : CONFIG.defaultLang;
  applyTranslations(next);
  try {
    window.localStorage.setItem(CONFIG.storageKey, next);
  } catch (error) {
    /* storage may be blocked – the page still switches language for this visit */
  }
}

function detectLang() {
  try {
    const saved = window.localStorage.getItem(CONFIG.storageKey);
    if (saved === "de" || saved === "en") return saved;
  } catch (error) {
    /* ignore */
  }
  const browser = (navigator.language || CONFIG.defaultLang).toLowerCase();
  return browser.indexOf("de") === 0 ? "de" : CONFIG.defaultLang;
}

/* =========================================================
   Screenshot gallery
   ========================================================= */

const galleryState = {
  root: null,
  viewport: null,
  track: null,
  dots: null,
  status: null,
  prev: null,
  next: null,
  index: 0
};

const gallerySlides = () => (galleryState.track ? $$(".slide", galleryState.track) : []);

function galleryBuildDots() {
  if (!galleryState.dots) return;
  const count = gallerySlides().length;
  galleryState.dots.innerHTML = Array.from(
    { length: count },
    (_value, index) => `<button class="gallery__dot" type="button" data-index="${index}"></button>`
  ).join("");
}

function galleryResync() {
  if (!galleryState.root) return;

  const slides = gallerySlides();
  if (!slides.length) return;

  const total = slides.length;
  const dict = currentDict();
  galleryState.index = Math.max(0, Math.min(galleryState.index, total - 1));

  if (galleryState.dots && galleryState.dots.children.length !== total) galleryBuildDots();

  const gap = parseFloat(window.getComputedStyle(galleryState.track).columnGap) || 0;
  const step = slides[0].getBoundingClientRect().width + gap;
  galleryState.track.style.transform = "translate3d(" + -galleryState.index * step + "px, 0, 0)";

  slides.forEach((slide, index) => slide.setAttribute("aria-hidden", String(index !== galleryState.index)));

  const activeTitle = ($(".slide__title", slides[galleryState.index]) || {}).textContent || "";
  if (galleryState.status) {
    galleryState.status.textContent = dict.gallery.statusFormat
      .replace("{index}", String(galleryState.index + 1))
      .replace("{total}", String(total))
      .replace("{title}", activeTitle.trim());
  }

  if (galleryState.dots) {
    $$(".gallery__dot", galleryState.dots).forEach((dot, index) => {
      const slideTitle = ($(".slide__title", slides[index]) || {}).textContent || "";
      dot.setAttribute(
        "aria-label",
        dict.gallery.goTo.replace("{index}", String(index + 1)).replace("{title}", slideTitle.trim())
      );
      dot.classList.toggle("is-active", index === galleryState.index);
      if (index === galleryState.index) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
  }

  if (galleryState.prev) galleryState.prev.disabled = galleryState.index === 0;
  if (galleryState.next) galleryState.next.disabled = galleryState.index === total - 1;
}

function galleryGo(delta) {
  const total = gallerySlides().length;
  if (!total) return;
  const next = Math.max(0, Math.min(galleryState.index + delta, total - 1));
  if (next === galleryState.index) return;
  galleryState.index = next;
  galleryResync();
}
/* =========================================================
   UI behaviour
   ========================================================= */

function initGallery() {
  const root = $("[data-gallery]");
  if (!root) return;

  galleryState.root = root;
  galleryState.viewport = $(".gallery__viewport", root);
  galleryState.track = $("[data-gallery-track]", root);
  galleryState.dots = $("[data-gallery-dots]", root);
  galleryState.status = $("[data-gallery-status]", root);
  galleryState.prev = $("[data-gallery-prev]", root);
  galleryState.next = $("[data-gallery-next]", root);

  galleryBuildDots();

  if (galleryState.prev) galleryState.prev.addEventListener("click", () => galleryGo(-1));
  if (galleryState.next) galleryState.next.addEventListener("click", () => galleryGo(1));

  if (galleryState.dots) {
    galleryState.dots.addEventListener("click", (event) => {
      const dot = event.target.closest(".gallery__dot");
      if (!dot) return;
      const index = Number(dot.dataset.index);
      if (Number.isFinite(index) && index !== galleryState.index) {
        galleryState.index = index;
        galleryResync();
      }
    });
  }

  root.addEventListener("keydown", (event) => {
    if (!root.contains(document.activeElement)) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      galleryGo(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      galleryGo(1);
    }
  });

  let touchStartX = 0;
  let touchStartY = 0;
  let touchActive = false;

  if (galleryState.viewport) {
    galleryState.viewport.addEventListener(
      "touchstart",
      (event) => {
        if (event.touches.length !== 1) return;
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
        touchActive = true;
      },
      { passive: true }
    );

    galleryState.viewport.addEventListener(
      "touchend",
      (event) => {
        if (!touchActive) return;
        touchActive = false;
        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) galleryGo(deltaX < 0 ? 1 : -1);
      },
      { passive: true }
    );
  }

  window.addEventListener("resize", galleryResync);
}

function initVideo() {
  const wrap = $("[data-video]");
  if (!wrap) return;

  const facade = $(".video__facade", wrap);
  const poster = $(".video__poster", wrap);
  if (poster) poster.addEventListener("error", () => poster.classList.add("is-hidden"));
  if (!facade) return;

  facade.addEventListener(
    "click",
    () => {
      const iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" + CONFIG.youtubeId + "?autoplay=1&rel=0&modestbranding=1";
      iframe.title = currentDict().video.iframeTitle;
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("allowfullscreen", "");
      wrap.textContent = "";
      wrap.appendChild(iframe);
      iframe.focus();
    },
    { once: true }
  );
}

function initAccordion() {
  const faq = $('[data-list="faq.items"]');
  if (!faq) return;

  faq.addEventListener("click", (event) => {
    const trigger = event.target.closest(".faq__trigger");
    if (!trigger) return;

    const item = trigger.closest(".faq__item");
    const wasOpen = item.classList.contains("is-open");

    $$(".faq__item.is-open", faq).forEach((openItem) => {
      openItem.classList.remove("is-open");
      const openTrigger = $(".faq__trigger", openItem);
      if (openTrigger) openTrigger.setAttribute("aria-expanded", "false");
    });

    if (!wasOpen) {
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
}

function initNav() {
  const toggle = $(".nav-toggle");
  const panel = $("#nav-menu");
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    panel.classList.toggle("is-open", open);
  };

  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));

  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) setOpen(false);
  });
}

function initLangSwitch() {
  $$(".lang__btn").forEach((button) => {
    button.addEventListener("click", () => setLang(button.dataset.lang));
  });
}

function initDownloadLinks() {
  const url = typeof DOWNLOAD_URL === "string" && DOWNLOAD_URL.trim() ? DOWNLOAD_URL.trim() : RELEASES_URL;

  $$("[data-download]").forEach((link) => {
    link.setAttribute("href", url);
    if (/^https?:/i.test(url)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}
function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = $$(
    ".section__head, .card, .feature, .slide, .step, .point, .faq__item, .video, .beta, .hero__shot"
  );
  if (!targets.length) return;

  targets.forEach((target) => target.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
  );

  targets.forEach((target) => observer.observe(target));
}

/* ── Back to top ─────────────────────────────────────── */

function initToTop() {
  const button = $("[data-to-top]");
  if (!button) return;

  button.hidden = false;

  const update = () => button.classList.toggle("is-visible", window.scrollY > 700);
  window.addEventListener("scroll", update, { passive: true });
  update();

  button.addEventListener("click", () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });
}

/* ── Highlight the section currently in view ─────────── */

function initScrollSpy() {
  const links = $$(".nav__list a[href^='#']");
  if (!links.length || !("IntersectionObserver" in window)) return;

  const map = new Map();
  links.forEach((link) => {
    const section = document.getElementById(link.getAttribute("href").slice(1));
    if (section) map.set(section, link);
  });
  if (!map.size) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const link = map.get(entry.target);
        if (!link) return;
        links.forEach((item) => item.classList.toggle("is-current", item === link));
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  map.forEach((_link, section) => observer.observe(section));
}

/* =========================================================
   Boot
   ========================================================= */

function init() {
  applyTranslations(detectLang());

  initNav();
  initLangSwitch();
  initAccordion();
  initGallery();
  initVideo();
  initDownloadLinks();
  initToTop();
  initScrollSpy();
  initReveal();

  galleryResync();
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();










