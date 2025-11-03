const content = `
<section id="introduzione">
    <h2>📖 NOTA IMPORTANTE: GUIDA IN LAVORAZIONE (WIP)</h2>
    <p>Ciao! Grazie per usare questa guida.</p>
    <p>Ti prego di notare che la guida è attualmente in fase di sviluppo (<strong>Work in Progress</strong>). Questo significa che, sebbene le informazioni principali sui percorsi e sugli allenatori siano corrette, alcuni dettagli specifici non sono ancora stati inseriti.</p>
    
    <h3>Cosa manca al momento:</h3>
    <ul>
        <li>Gli <strong>oggetti di cura</strong> utilizzati dagli allenatori durante le battaglie.</li>
    </ul>

    <h3>In fondo al documento troverai:</h3>
    <ul>
        <li><a href="#recap">Recap completo dei punteggi</a></li>
        <li><a href="#uova">Lista uova speciali con pool</a></li>
        <li><a href="#pozzi">Elenco dei pozzi</a></li>
        <li><a href="#mt">Lista delle MT capipalestra</a></li>
        <li><a href="#eventi">Eventi in game</a></li>
	    <li><a href="#punteggitorre">Ricompense Torre Lotta</a></li>
	    <li><a href="#pietre">Costi Megapietre</a></li>
    </ul>

    <h3>Info utile</h3>
    <ul>
        <li><a href="https://www.twitch.tv/alepre98/clip/PleasantKindMouseKappa-CetcfebMIqk5ehYp" target="_blank">Come pulire la cache</a></li>
    </ul>

    <div class="warning-box">
        <strong>Hai trovato un errore?</strong><br>
        <p>La tua collaborazione è preziosa! Per qualsiasi segnalazione, imprecisione o suggerimento, non esitare a contattarmi su Telegram: <a href="https://t.me/Castee01" target="_blank">https://t.me/Castee01</a></p>
        <p>Entra nel gruppo telegram ufficiale: <a href="https://t.me/+LduWQtvTjsswOWY0" target="_blank">GRUPPO TELEGRAM</a></p>
    </div>

    <p><strong>Grazie per la comprensione e buon gioco!</strong></p>
    
    <div class="team-card">
        <h4>Credits</h4>
        <p>Guida realizzata da <strong>Caste01</strong> e <strong>B3rtani</strong></p>
    </div>
</section>

<section id="laboratorio">
    <h2>🏠 ROUTE 1 - CASA INIZIALE</h2>
    <p>Inizi la partita all'interno di una casa. Prima di cominciare, è fondamentale impostare il Tracker (richiede "<a href="http://www.twitch.tv/subs/poly">sub</a>" a Poly). Questa funzione ti permette di scegliere i tuoi Pokémon preferiti, che avranno la possibilità di apparire nella slot machine iniziale.</p>
    
    <h3>Regole per il Tracker (BST):</h3>
    <ul>
        <li><strong>Primi due slot:</strong> puoi inserire Pokémon con un BST massimo di 479.</li>
        <li><strong>Altri tre slot:</strong> puoi inserire Pokémon con un BST massimo di 567.</li>
    </ul>

    <p>Una volta configurato il Tracker, sei pronto per iniziare. Parla con il computer di fronte a te per dare il via alla tua sessione (run): ti assegnerà un Pokémon casuale tramite una slot machine. (Premi B per chiudere la schermata)</p>
    
    <p>Una volta ottenuto il Pokémon, scendi le scale per proseguire. Interagendo con il mobile sotto le scale, troverai la <strong>Stash</strong>, una borsa speciale che conserva gli oggetti tra una partita e l'altra.</p>

    <h3>SCOUT</h3>
    <p>Le prime zone che puoi esplorare sono tre:</p>
    <ul>
        <li><strong>Route 1</strong> (contiene 4 Pokémon), situata subito fuori dalla casa.</li>
        <li><strong>Zone 2</strong> (contiene 5 Pokémon), a sinistra del vecchio.</li>
        <li><strong>Zone 3</strong> (contiene 4 Pokémon), alla sua destra, dove trovi anche la casa per trasformare Ditto.</li>
        <li><strong>Bonus</strong> (contiene 4 Pokémon): accanto al vecchio ci sarà una zona temporanea per <a href="#eventi">l'evento Spooky</a>, al suo interno troverai anche una signora a cui vendere le caramelle rare, e dalla quale comprare Megapietre a prezzi scontati.</li>
    </ul>

    <p>Il vecchio che si trova tra le due zone ti permette di <strong>bloccare il livello</strong> dei tuoi Pokémon a 8 per queste tre aree, e a 11 nella zona successiva allo scontro con il rivale. (Questa opzione richiede una "<a href="http://www.twitch.tv/subs/poly">sub</a>" a Poly).</p>

    <h3>LA CASETTA SULLA SPIAGGIA (UOVA)</h3>
    <p>Al centro della spiaggia noterai una piccola casa. Questo è il luogo dove potrai gestire le uova raccolte durante le tue avventure. Le funzioni sono divise su due piani:</p>
    <ul>
        <li><strong>Al piano terra:</strong> Interagisci con il computer per <strong>schiudere un uovo</strong> oppure per <strong>upgradare due uova dello stesso tipo.</strong></li>
        <li><strong>Al piano superiore:</strong> Qui potrai <strong>fondere due uova di tipo diverso, tieni a mente che fondere uova tier 2 o 3 non ti darà alcun vantaggio. Attenzione</strong>: ogni fusione ha una bassa probabilità di droppare un <strong>Ditto</strong>.</li>
    </ul>

    <h3>IL NEGOZIO (PACCHETTI)</h3>
    <p>A destra della spiaggia troverai un'altra casa che funziona come un negozio. Qui hai due opzioni:</p>
    <ul>
        <li><strong>Parla con il mercante:</strong> Potrai comprare e aprire pacchetti in cambio di crediti.</li>
        <li><strong>Interagisci con la macchinetta (sulla sinistra):</strong> Al costo di 10 crediti, potrai scambiare il tuo Pokémon con un altro scelto casualmente.</li>
    </ul>

    <h3>RIVALE</h3>
    <p>Proseguendo a destra della spiaggia, incontrerai N, il tuo rivale, pronto a sfidarti.</p>
    <ul>
        <li><strong>N avrà 1 pokemon a lv 11</strong></li>
    </ul>

    <p>Vincendo, riceverai <strong class="badge badge-points">5 punti</strong> e avrai inoltre il <strong>10% di possibilità di droppare 1 uovo 🥚</strong>.</p>
 Superare questo scontro ti permetterà di proseguire la tua avventura.</p>
       <div class="warning-box">
       <h3>⚠️PICCOLA TIP</h3>
    <p>I Pokémon selvatici che trovi nell'erba alta danno <strong>1 punto esperienza (EXP)</strong>. Questa meccanica può essere molto utile se, dopo lo scontro con il rivale, ti manca pochissimo per salire di livello.</p></div>
</section>

<section id="ponte">
    <h2>🌉 ROUTE 2</h2>
    
    <h3>ZONA SCOUT POST RIVALE</h3>
    <p>Una volta sconfitto il rivale avrai accesso all'ultima zona di esplorazione (contiene dai 3 ai 5 Pokémon). Qui potrai incontrare Pokémon selvatici di <strong>livello 11</strong>.</p>

    <h3>PONTE DEI PIGLIAMOSCHE</h3>
    <p>Proseguendo lungo il sentiero dovrai affrontare tre Pigliamosche, ed è possibile curarsi tra uno e l'altro tramite l'infermiera. Preparati a combattere:</p>
    <ul>
        <li><strong>Primo Pigliamosche:</strong> 1 Pokémon di livello 12.</li>
        <li><strong>Secondo Pigliamosche:</strong> 2 Pokémon livello 8 e 9.</li>
        <li><strong>Terzo Pigliamosche:</strong> 2 Pokémon livello 11 e 9.</li>
    </ul>

    <p>Sconfiggili tutti e tre per ricevere <strong class="badge badge-points">10 punti</strong> e sbloccare il passaggio per continuare.</p>

    <p>Superate le sfide, incontrerai una signora con un mercatino. Da lei potrai acquistare le <strong>Pietre per la megaevoluzione</strong> dei tuoi Pokémon.</p>

    <h3>COME USARE LA MEGAEVOLUZIONE</h3>
    <p>Una volta che il tuo Pokémon tiene la sua Megapietra (devi fare give), potrai attivare la trasformazione in battaglia.</p>
    <ol>
        <li>Durante il tuo turno, prima di selezionare la mossa, premi il tasto <strong>SELECT</strong>.</li>
        <li>Noterai che il <strong>simbolo</strong> accanto al nome del tuo Pokémon <strong>si illuminerà</strong> di azzurro, a conferma che la Megaevoluzione è attiva.</li>
    </ol>

    <div class="warning-box">
        <strong>⚠️ INFO SULLA VELOCITÀ</strong><br>
        Fai molta attenzione a questo dettaglio: nel primo turno in cui il tuo Pokémon si megaevolve, la sua <strong>Velocità</strong> verrà calcolata sulla base della sua forma normale, non di quella megaevoluta!
    </div>

    <p>Prosegui verso destra per arrivare a <strong>Ukani Town</strong>. Qui troverai:</p>
    <ul>
        <li><strong>Un'infermiera</strong> per curare la tua squadra.</li>
        <li><strong>Due Poké Ball</strong> da raccogliere.</li>
    </ul>
    <p>Per continuare la tua avventura, <strong>entra nella casa situata tra il Centro Pokémon e il Market.</strong></p>
</section>

<section id="foresta">
    <h2>🌲 FORESTA UKANI</h2>
    <p>Sei entrato in un dungeon. Per poterne uscire, dovrai sconfiggere quasi tutti gli allenatori presenti.</p>
    
    <h3>NOTA BENE: INCONTRARE POKÉMON SELVATICI</h3>
    <div class="warning-box"><p>In questa zona non ci sono incontri casuali. Se hai bisogno di affrontare Pokémon selvatici (ad esempio per curarti), devi usare un oggetto speciale.
    <p>Questo può essere utile anche per cercare una mossa da copiare, se il tuo Pokémon conosce <strong>Sketch</strong>.</p>
    <p>Segui questi passaggi:</p></div>
    <ol>
        <li>Apri la borsa e attiva il <strong>"Wild Attract"</strong>.</li>
        <li>Fai un passo per far apparire un Pokémon.</li>
        <li>Al termine della battaglia, <strong>rimani fermo</strong> e disattiva subito l'oggetto per evitare altri incontri.</li>
    </ol>
    <h3>ALLENATORI</h3>
    <p>Appena entrato, raccogli le <strong>4 Poké Ball</strong> che trovi subito davanti a te.</p>

    <p>Prosegui verso l'alto. Affronterai due allenatori in successione:</p>
    <ol>
        <li><strong>Primo pigliamosche:</strong> 3 Pokémon (due di livello 9, uno di livello 8).</li>
        <li> <strong>Seconda Allenatrice:</strong> 1 Pokémon (livello 12). Questa trainer avrà <strong class="badge badge-cure">1 Full Restore</strong>.</li>
    </ol>

    <p>Dopo averla sconfitta, gira a sinistra. Raccogli la Poké Ball e prosegui verso l'alto per entrare in una nuova area. Qui troverai un santuario: interagisci con esso per far apparire <strong>Celebi</strong>, che ti donerà uno strumento casuale.</p>

    <p>Torna sul sentiero principale e prosegui verso destra.</p>
    <ul>
        <li>Troverai un <strong>terzo allenatore</strong>: 2 Pokémon (entrambi livello 14).</li>
        <li>Subito dopo, verso l'alto(Opzionale): <strong>quarto Allenatore</strong> con 1 Pokémon di livello 14. Sconfiggilo per recuperare una Poké Ball extra.</li>
    </ul>

    <p>Oltrepassa il ponte proseguendo verso destra fino ad arrivare a un bivio.</p>

    <p>Al bivio hai due strade:</p>
    <ul>
        <li><strong>A DESTRA (Bonus):</strong> Troverai una Poké Ball e un <strong>pozzo</strong>. Interagendo con l'uomo nel pozzo potrai provare a cambiare la Natura del tuo Pokémon.</li>
        <li><strong>VERSO IL BASSO (Uscita):</strong> Qui ti attende la sfida finale del dungeon con un membro del Team Plasma.</li>
    </ul>

    <p>Dovrai affrontare:</p>
    <ul>
        <li>2 Pokémon di livello 14</li>
        <li>1 Pokémon di livello 18</li>
    </ul>

    <p>Una volta sconfitto, prosegui verso il basso e poi a destra per uscire finalmente dalla foresta.</p>

    <p>Per aver superato il dungeon riceverai una ricompensa in <strong>punti</strong>:</p>
    <ul>
        <li><strong>Completamento normale:</strong><span class="badge badge-points">30 punti</span>.</li>
        <li><strong>Full Clear (tutti gli allenatori sconfitti):</strong> <span class="badge badge-points">50 punti</span>.</li>
    </ul>
</section>

<section id="iris">
    <h2>⚡ HANU CITY (1° PALESTRA)</h2>
    <p>Seguendo la strada arriverai ad <strong>Hanu City</strong>. Prima di affrontare la Palestra, esplora l'area per raccogliere alcuni oggetti utili:</p>
    <ul>
        <li>Una <strong>Poké Ball</strong> prima delle scale, sulla destra.</li>
        <li>Una <strong>Poké Ball</strong> al centro dell'area superiore.</li>
        <li>Una <strong>Poké Ball</strong> sulla sinistra.</li>
        <li>Una <strong>Poké Ball</strong> all'estrema destra.</li>
    </ul>

    <p>Una volta raccolto tutto, sali le scale per raggiungere l'area della <strong>prima Palestra</strong>, quella di Iris. Curati dall'infermiera, poi preparati alla sfida.</p>

    <h3>PRIMA PALESTRA: IRIS</h3>
    <p>Per iniziare, entra nella casa a sinistra e parla con Iris. La sfida si articola in tre battaglie consecutive.</p>

    <h4>Regole importanti:</h4>
    <ul>
        <li>Al termine di ogni scontro, avrai la possibilità di <strong>assegnare bacche o strumenti</strong> al tuo Pokémon. Potrai anche utilizzare oggetti come MT o caramelle rare.</li>
        <li>Lo scontro finale con la Capopalestra Iris si svolgerà con una <strong>condizione meteo casuale</strong> (pioggia, temporale, grandine,sabbia,sole; quest'ultimo però non c'è, e corrisponderà ad un'assenza di meteo).</li>
        <li>Se Iris possiede un Pokémon in grado di megaevolversi, lo farà (un solo pokemon durante lo scontro).</li>
    </ul>

    <h4>Allenatori della Palestra:</h4>
    <ol>
        <li><strong>Primo Allenatore:</strong> 1 Pokémon di livello 17.</li>
        <li><strong>Secondo Allenatore:</strong> 2 Pokémon (uno di livello 14 e uno di livello 15).</li>
        <li><strong>Iris (Capopalestra):</strong> 5 Pokémon (quattro di livello 17 e un asso di livello 23). Iris ha <strong class="badge badge-cure">2 Pozze</strong> che userà in maniera difficile da predictare, ma in linea di massima curerà solo se vede che il proprio Pokémon può sopravvivere al tuo prossimo attacco con l'utilizzo della cura, e spesso la userà sull'asso perchè essendo di livello più alto avrà più PS</li>
    </ol>

    <p>Una volta sconfitta Iris riceverai <span class="badge badge-points">70 punti</span>, ti regalerà la <span class="badge badge-tm">💿 TM39</span>. Attenzione: il tuo Pokémon avrà il <strong>50% di probabilità di apprenderla</strong>.</p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚</strong>.</p>

    <p>Per continuare la tua avventura, prendi il percorso verso l'alto che conduce a <strong>Route 3</strong>.</p>
</section>

<section id="worldboss1">
    <h2>🗺️ ROUTE3</h2>
    <p>Appena arrivato nella <strong>Route 3</strong>, avrai accesso a due percorsi distinti.</p>

    <p>Seguendo la via a sinistra, troverai una Poké Ball e un nuovo <strong>pozzo</strong>. Al suo interno c'è un uomo che ti offrirà di <strong>cambiare una delle mosse</strong> del tuo Pokémon con un'altra scelta casualmente. Sulla destra si snoda un sentiero con <strong>4 allenatori</strong> e <strong>3 Poké Ball</strong> da raccogliere. A differenza delle sfide in Palestra, non dovrai affrontarli di fila e potrai curare il tuo team tra uno scontro e l'altro.</p>

    <p>La tua decisione dovrebbe basarsi su una meccanica fondamentale del boss.<strong> ATTENZIONE:</strong> il livello dei suoi Pokémon si adatta al tuo. Affrontarlo con un livello più basso è quindi un grande vantaggio. Per questo motivo, se decidi di sfidarlo, ti consigliamo di saltare i 4 allenatori della Route 3 e salire direttamente al monte. In questo modo, lo affronterai al livello più basso possibile.</p>

    <p>Un'altra tattica vantaggiosa consiste nel gestire la barra dell'esperienza del tuo Pokémon. Portala quasi al massimo (ad esempio a 3/4) prima della battaglia con il WB. Sconfiggendo un avversario all'inizio dello scontro, salirai di livello, ottenendo un ulteriore livello di vantaggio.</p>

    <h3>PIGLIAMOSCHE</h3>
    <p>Nella route 3 troverai i seguenti allenatori:</p>
    <ul>
        <li><strong>Allenatore a destra:</strong> 1 Pokémon di livello 15.</li>
        <li><strong>Ragazza centrale:</strong> 4 Pokémon (tre di livello 15 e uno di livello 18).</li>
        <li><strong>Ragazza a sinistra:</strong> 2 Pokémon (uno di livello 15 e uno di livello 18).</li>
        <li><strong>Ragazzo a sinistra:</strong> 2 Pokémon (uno di livello 12 e uno di livello 15).</li>
    </ul>

    <p>Per raggiungere il World Boss, sali le scale che trovi dopo l'infermiera. Il sentiero per il World Boss ti porterà attraverso il <strong>Monte Kaimana</strong>, dove potrai raccogliere <strong>5 Poké Ball</strong>.</p>

    <h3>WORLD BOSS</h3>
    <h4>IMPORTANTE</h4>
    <ul>
        <li><strong>Megaevoluzione:</strong> Se il World Boss possiede un Pokémon in grado di megaevolversi, lo farà. <strong>Attenzione</strong>: se in campo ci saranno contemporaneamente due Pokémon in grado di megaevolversi, lo faranno entrambi.</li>
        <li><strong>Livello Adattivo:</strong> Ricorda, il suo livello dipende dal tuo!</li>
        <li><strong>Drop uova</strong>: Sconfiggendolo avrete <strong>1 UOVO SPECIALE</strong> garantito.</li>
        <li><strong>Fase 1</strong>: In questa prima fase il WB avrà <strong>4 Pokémon di 8 livelli inferiori</strong> al tuo. Avrà inoltre <strong class="badge badge-cure">1 Dire Hit</strong> e <strong class="badge badge-cure">1 Full Restore</strong></li>
    </ul>

    <p>Sconfiggere il World Boss ti consente di ottenere grandi ricompense.</p>
    <ul>
        <li><strong>Ricompensa della Fase 1:</strong> Riceverai <span class="badge badge-points">10 punti</span>, <strong>10 Megashard</strong>. Inoltre riceverete un Full Heal, un Dire Hit, un X Sp. Atk, un X Atk</li>
        <li><strong>Premio di Partecipazione:</strong> Se contribuisci a sconfiggere una fase del boss partecipando ad <strong>almeno una battaglia</strong>, riceverai un premio extra quando quello stage verrà completato.</li>
    </ul>

    <p>Una volta completate le sfide di Route 3 (allenatori e/o World Boss), il tuo prossimo obiettivo è il <strong>Tunnel Poaka</strong>. Per raggiungerlo, torna sulla Route 3 e cerca l'apertura nella montagna sulla sinistra.</p>

    <div class="warning-box">
        <strong>⚠️ ATTENZIONE:</strong> Il Tunnel Poaka <strong>è un dungeon.</strong> Questo significa che non potrai curare i tuoi Pokémon tra uno scontro e l'altro (se non tramite wild attract) fino all'uscita. Assicurati di aver curato il tuo pokemon!
    </div>
</section>

<section id="tunnelpoaka">
    <h2>🕳️ TUNNEL POAKA</h2>
    <p>Troverai in tutto <strong>7 allenatori e 6 Poké Ball</strong>. Una volta dentro, scendi le scale e prosegui verso il basso fino a una sporgenza. Salta giù per raggiungere un punto centrale da cui si diramano tre percorsi. Ricorda, sei in un dungeon, quindi non puoi curarti tra gli scontri, se non tramite i selvatici.</p>

    <p>Ecco cosa troverai in ogni direzione:</p>

    <h3>PERCORSO A DESTRA (Esplorazione)</h3>
    <p>Questo sentiero è ricco di sfide e ricompense.</p>
    <ol>
        <li><strong>Primo Allenatore (obbligatorio):</strong> 1 Pokémon (livello 17). Questo trainer avrà <strong class="badge badge-cure">1 Full Restore</strong></li>
        <li><strong>Secondo Allenatore (opzionale):</strong> 1 Pokémon (livello 20).</li>
        <li>Raccogli la <strong>Poké Ball</strong>.</li>
        <li>Salta nel buco per raggiungere un'area nascosta dove troverai:
            <ul>
                <li><strong>Allenatrice (opzionale ma si gira):</strong> 2 Pokémon (livello 24 e 21).</li>
                <li>Due <strong>Poké Ball</strong>. Una dietro all'alenatrice, l'altra appena usciti dal buco.</li>
            </ul>
        </li>
    </ol>

    <h3>PERCORSO A SINISTRA (Esplorazione)</h3>
    <p>Anche questo parte offre allenatori e oggetti.</p>
    <ol>
        <li><strong>Primo Allenatore (obbligatorio):</strong> 1 Pokémon (livello 18).</li>
        <li>Raccogli la <strong>Poké Ball</strong>.</li>
        <li><strong>Seconda Allenatrice (opzionale):</strong> 2 Pokémon (livello 12 e 15). Questa trainer avrà <strong class="badge badge-cure">1 Full Restore</strong></li>
        <li>Dopo averla sconfitta, sali le scale per raggiungere il piano superiore, dove ti attende:
            <ul>
                <li><strong>Montanaro (obbligatorio per item):</strong> 2 Pokémon (entrambi livello 20).</li>
                <li>Una <strong>Poké Ball</strong>.</li>
            </ul>
        </li>
    </ol>

    <h3>PERCORSO VERSO IL BASSO (Via per l'Uscita)</h3>
    <p>Questa è la strada principale per proseguire.</p>
    <ol>
        <li>Raccogli la <strong>Poké Ball</strong> lungo il cammino.</li>
        <li><strong>Allenatore (Opzionale):</strong> 3 Pokémon (due di livello 12 e uno di livello 15).</li>
        <li>Infine, prendi la scala per salire al piano successivo e da lì prosegui verso l'uscita del tunnel.</li>
    </ol>

    <p>Una volta uscito dal Tunnel Poaka, riceverai una ricompensa in <strong>punti</strong>:</p>
    <ul>
        <li><strong>Completamento normale:</strong> <span class="badge badge-points">20 punti</span>.</li>
        <li><strong>Full Clear (tutti gli allenatori sconfitti):</strong> <span class="badge badge-points">25 punti</span>.</li>
    </ul>
</section>

<section id="chicco">
    <h2>🔥 OHANA TOWN (2° PALESTRA)</h2>
    <p>Una volta uscito dal tunnel, ti troverai sul percorso che conduce a <strong>Ohana Town</strong>. Lungo il cammino, raccogli le <strong>due Poké Ball</strong> che trovi. Arrivato in città, cura la tua squadra: è il momento di affrontare la seconda Palestra, guidata da <strong>Chicco</strong>.</p>

    <h3>SECONDA PALESTRA: CHICCO</h3>
    <p>La Palestra è presidiata da <strong>5 allenatori </strong>che dovrai sconfiggere prima di poter affrontare il Capopalestra, fai attenzione: se possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).</p>

    <h4>Allenatori della Palestra:</h4>
    <ul>
        <li><strong>Primo Allenatore:</strong> 3 Pokémon (livelli 14, 17, 21).</li>
        <li><strong>Secondo Allenatore:</strong> 2 Pokémon (entrambi livello 21).</li>
        <li><strong>Terzo Allenatore:</strong> 1 Pokémon (livello 20).</li>
        <li><strong>Quarto Allenatore:</strong> 2 Pokémon (entrambi livello 18).</li>
        <li><strong>Quinto Allenatore:</strong> 1 Pokémon (livello 23).</li>
        <li><strong>Chicco (Capopalestra):</strong> 6 Pokémon (quattro di livello 20, uno di livello 21 e l'asso di livello 26). Il suo primo Pokémon sarà sempre l'asso a livello 26. Buck avrà inoltre <strong class="badge badge-cure">2 Super Pozioni</strong>.</li>
    </ul>

    <p>Una volta sconfitto Chicco riceverai <span class="badge badge-points">35 punti</span>, ti regalerà la <span class="badge badge-tm">💿 TM08</span>. Attenzione: il tuo Pokémon avrà il <strong>50% di probabilità di apprenderla.</strong></p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚.</strong></p>

    <p>Per proseguire, vai verso l'alto a destra. Incontrerai un marinaio vicino a un traghetto che ti metterà di fronte a una scelta:</p>
    <ul>
        <li><strong>Tornare a Route 1:</strong> Scegli questa opzione se hai bisogno di tornare all'inizio del gioco per aprire pacchetti, o per depositare o ritirare oggetti dalla tua Stash. <strong>Una volta fatto, potrai parlare di nuovo con il marinaio nella Route 1 per tornare a Ohana Town</strong> e proseguire la tua avventura.</li>
        <li><strong>Proseguire per Porto Niuna:</strong> Questa è la via per avanzare nella storia.</li>
    </ul>
</section>

<section id="acromio">
    <h2>🌊 ROUTE 4</h2>
    <p>Una volta sceso dal traghetto, arriverai a <strong>Route 4</strong>. Prima di proseguire, esplora l'area: troverai <strong>due Poké Ball</strong> e una vecchietta che <strong>curerà</strong> il tuo Pokémon. Approfittane per prepararti allo scontro che ti attende. Per poter accedere alla grotta, dovrai prima sfidare una recluta del Team Plasma. Preparati per una <strong>battaglia in doppio</strong>. La recluta schiererà due Pokémon:</p>
    <ul>
        <li>Un Pokémon di livello 23.</li>
        <li>Un Pokémon di livello 21.</li>
    </ul>

    <p>Una volta sconfitto, il passaggio sarà libero e potrai entrare nella <strong>Grotta Niuna</strong>.</p>

    <h2>🏔️ GROTTA NIUNA</h2>
    <h3>NOTE IMPORTANTI SULLA GROTTA</h3>
    <ul>
        <li><strong>Non è un dungeon:</strong> A differenza delle aree precedenti, questa grotta <strong>non è un dungeon</strong>. Potrai quindi uscire in qualsiasi momento per curare la tua squadra tra uno scontro e l'altro.</li>
        <li><strong>Minigioco delle Megashard:</strong> Interagisci con le <strong>pietre gialle</strong> che trovi sparse nella grotta per avviare un minigioco. Usando il piccone, avrai il <strong>50% di possibilità</strong> di trovare  <strong>1 Megashard</strong> per ogni pietra.</li>
    </ul>

    <p>Il tuo primo obiettivo è raggiungere il terzo piano della grotta.</p>
    <ol>
        <li>Appena entri, esplora la prima stanza per raccogliere <strong>3 Poké Ball</strong>.</li>
        <li>Prendi la scala a sinistra per entrare in una nuova area dove troverai <strong>4 Poké Ball</strong> e l'uscita per GEMORA CITY. Esplora quest'area opzionale se vuoi, dopodiché torna al primo piano.</li>
        <li>Per proseguire la run, prendi la scala situata in <strong>alto a destra</strong>.</li>
        <li>Nel nuovo piano, raccogli un'altra <strong>Poké Ball</strong>.</li>
        <li>Sali ancora per trovare un'ultima <strong>Poké Ball</strong> prima dell'uscita.</li>
        <li>L'uscita ti condurrà a <strong>Ciman Niuna</strong>, dove Acromio ti aspetta per una sfida.</li>
    </ol>

    <p>Preparati a un combattimento impegnativo. Come per i Capipalestra, anche Acromio può usare la <strong>megaevoluzione</strong> (una sola volta durante lo scontro).</p>

    <p><strong>Acromio</strong> schiererà 3 Pokémon ed avrà a disposizione <strong class="badge badge-cure">2 Super Pozioni</strong>:</p>
    <ul>
        <li>Due Pokémon di livello 27.</li>
        <li>Un Pokémon di livello 30.</li>
    </ul>

    <p>Sconfiggilo per ottenere una ricompensa di <strong>10 Megashard</strong> e <span class="badge badge-points">10 Punti</span>.</p>

    <p>Una volta terminata la battaglia con Acromio noterai che sono apparse 10 <strong>reclute del Team Plasma</strong>, puoi evitarle tutte per uscire e curare il tuo team. Al tuo ritorno nella grotta dovrai trovare e sconfiggere le Reclute per completare l'esplorazione dell'area.</p>

    <h4>Piano Terra (Stanza Principale)</h4>
    <ul>
        <li><strong>Recluta in basso a sinistra:</strong> 1 Pokémon (livello 23).</li>
        <li><strong>Recluta vicino alla scala sinistra:</strong> 2 Pokémon (entrambi livello 21).</li>
        <li><strong>Recluta in alto a sinistra:</strong> 1 Pokémon (livello 24).</li>
        <li><strong>Recluta nella zona centrale:</strong> 4 Pokémon (due di livello 17, due di livello 21).</li>
        <li><strong>Recluta vicino alla scala in alto a destra:</strong> 2 Pokémon (entrambi livello 21).</li>
    </ul>

    <h4>Area di Gemora City (Accesso dalla Scala a Sinistra)</h4>
    <ul>
        <li><strong>Recluta al centro:</strong> 1 Pokémon (livello 20).</li>
        <li><strong>Recluta in basso a destra:</strong> 1 Pokémon (livello 20).</li>
        <li><strong>Recluta in basso a sinistra:</strong> 2 Pokémon (entrambi livello 18).</li>
        <li><strong>Recluta in alto a destra:</strong> 1 Pokémon (livello 20).</li>
    </ul>

    <h4>Area di Ciman Niuna (Accesso dalla Scala in Alto a Destra)</h4>
    <ul>
        <li><strong>Unica recluta:</strong> 2 Pokémon (entrambi livello 18).</li>
    </ul>

    <p>Una volta sconfitte tutte le reclute del Team Plasma, potrai finalmente proseguire la tua avventura uscendo verso <strong>Gemora City</strong>.</p>
</section>

<section id="artemisio">
    <h2>🌿 GEMORA CITY (3° PALESTRA)</h2>
    <p>Una volta uscito dalla grotta, ti troverai a <strong>Gemora City</strong>. Prima di procedere, esplora l'area per trovare <strong>2 Poké Ball</strong>. Il vero segreto di Gemora City si nasconde nella statua al centro della piazza: interagisci con essa per rivelare un <strong>passaggio segreto</strong>. Il passaggio ti condurrà a un nuovo <strong>pozzo</strong>, dove un uomo si offrirà di cambiare l'<strong>abilità</strong> del tuo Pokémon con un'altra scelta casualmente. (Nel caso avessi un Pokémon con la Mega evoluzione cambierebbero entrambe). Dopo esserti curato, dirigiti nell'area a sinistra. Sali le scale per trovare l'ingresso delle Miniere di Gemora.</p>

    <h3>LE MINIERE DI GEMORA (DUNGEON)</h3>
    <div class="warning-box">
        <strong>⚠️ ATTENZIONE:</strong> Le Miniere di Gemora sono un <strong>dungeon</strong>. Non potrai uscire per curarti tra uno scontro e l'altro. Preparati ad affrontare 6 allenatori, uno per ogni piano. <strong>Minigioco Megashard:</strong> Anche qui, interagendo con le <strong>pietre gialle</strong> potrai avviare il minigioco per trovare Megashard.
    </div>

    <ul>
        <li><strong>Piano 1:</strong> Allenatore con 2 Pokémon (entrambi livello 24).</li>
        <li><strong>Piano 2:</strong> Allenatrice con 6 Pokémon (tutti livello 17) e 1 Poké Ball.</li>
        <li><strong>Piano 3:</strong> Allenatrice con 1 Pokémon (livello 26).</li>
        <li><strong>Piano 4:</strong> Allenatrice con 1 Pokémon (livello 26) e 1 Poké Ball.</li>
        <li><strong>Piano 5:</strong> Allenatore con 6 Pokémon (tutti livello 17) e 1 Poké Ball.</li>
        <li><strong>Piano 6:</strong> Allenatore con 1 Pokémon (livello 26) e le pietre per il minigioco.</li>
    </ul>

    <p>Una volta sconfitti gli allenatori, potrai uscire dalla miniera usando la <strong>porta al primo piano</strong>.</p>
    <ul>
        <li><strong>Uscita:</strong> <span class="badge badge-points">20 punti</span>.</li>
        <li><strong>Full Clear (tutti gli allenatori sconfitti):</strong> <span class="badge badge-points">25 punti</span>.</li>
    </ul>

    <h3>TERZA PALESTRA: ARTEMISIO</h3>
    <p>Dopo esserti ripreso dalle fatiche delle miniere, è il momento di affrontare la terza Palestra del gioco, guidata da Artemisio, una delle più difficili della run.</p>

    <div class="warning-box">
        <strong>Nota importante sullo scontro finale:</strong> Nello scontro con Artemisio, fai attenzione: se possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).
    </div>

    <h4>ALLENATORI DELLA PALESTRA</h4>
    <ul>
        <li><strong>Allenatori della Palestra (x5):</strong> Ciascuno di loro avrà 2 Pokémon di livello 26.</li>
        <li><strong>Artemisio (Capopalestra):</strong> 6 Pokémon (4 di livello 30, 1 di livello 33 e l'asso di livello 36). Artemisio avrà anche <strong class="badge badge-cure">2 Super Pozioni</strong>.</li>
    </ul>

    <p>Una volta sconfitto Artemisio riceverai <span class="badge badge-points">35 punti</span>, e ti regalerà la <span class="badge badge-tm">💿 TM34</span>. Attenzione: il tuo Pokémon avrà il <strong>50% di probabilità di apprenderla.</strong></p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚.</strong></p>

    <p>Prima di continuare, ricorda che puoi <strong>ripercorrere la Grotta Niuna per tornare alla Route 1</strong>, nel caso in cui avessi bisogno di usare la Stash per gestire i tuoi oggetti, o di aprire pacchetti.</p>

    <p>Per proseguire con la tua avventura, dirigiti nell'area in <strong>alto a destra</strong> di Gemora City, dietro il Centro Pokémon. Sali la scalinata e troverai un ingresso nella montagna: è l'accesso alle <strong>Rovine Ka'aka</strong>. 

<div class="warning-box">
<strong>⚠️ ATTENZIONE:</strong>Le Rovine Ka'aka sono un <strong>dungeon</strong>. Assicurati che il pokemon sia pronto, perché <strong>non potrai curarti tra le battaglie</strong> (se non tramite wild attract) fino a quando non ne sarai uscito.</p></div>
</section>

<section id="rovine">
    <h2>🏛️ ROVINE KA'AKA (DUNGEON)</h2>
    <p>Le rovine sono divise in <strong>cinque stanze</strong>. Troverai in tutto <strong>9 allenatori (8 opzionali e 1 obbligatorio) </strong>e <strong> 9 pokeball</strong>. 
<div class="warning-box">La strategia migliore è sconfiggere per primo quello <strong>obbligatorio (terza stanza)</strong> per "aprirsi la strada" verso l'uscita. Una volta che il percorso è sicuro, potrai decidere se affrontare le 8 sfide opzionali. <strong>Ricorda</strong>: tutte le 9 Poké Ball del dungeon sono ottenibili senza affrontare alcun trainer.</p></div>

    <h3>Prima Stanza</h3>
    <p>In questa prima area troverai <strong>3 Poké Ball</strong> e <strong>3 allenatori opzionali</strong>.</p>
    <ul>
        <li><strong>Montanaro a sinistra (Opzionale):</strong> 1 Pokémon (livello 32).</li>
        <li><strong>Montanaro al centro (Opzionale se si passa a sinistra):</strong> 3 Pokémon (tutti livello 26).</li>
        <li><strong>Vecchietta in alto (Opzionale):</strong> 1 Pokémon (livello 33).</li>
    </ul>

    <h3>Seconda Stanza</h3>
    <p>Prosegui per trovare <strong>1 Poké Ball</strong> e due allenatori opzionali, utili per guadagnare punti extra.</p>
    <ul>
        <li><strong>Karateka (Opzionale):</strong> 3 Pokémon (tutti livello 32).</li>
        <li><strong>Ragazza (Opzionale):</strong> 1 Pokémon (livello 38).</li>
    </ul>

    <h3>Terza Stanza</h3>
    <p>Qui troverai <strong>2 Poké Ball</strong>. Solo uno dei due allenatori è obbligatorio per avanzare.</p>
    <ul>
        <li><strong>Uomo in fondo alle scale (Obbligatorio):</strong> 2 Pokémon (entrambi livello 27). È necessario batterlo per continuare.</li>
        <li><strong>Ragazza (Opzionale):</strong> 3 Pokémon (due di livello 33, uno di livello 29). Questa trainer avrà anche <strong class="badge badge-cure">1 Super Pozione</strong>.</li>
    </ul>

    <h3>Quarta Stanza</h3>
    <p>In questa penultima stanza ci sono <strong>2 Poké Ball</strong> e due allenatori opzionali.</p>
    <ul>
        <li><strong>Montanaro (Opzionale):</strong> 2 Pokémon (livello 36 e 35).</li>
        <li><strong>Ragazzo (Opzionale):</strong> 2 Pokémon (entrambi livello 35).</li>
    </ul>

    <h3>Quinta Stanza (L'Uscita)</h3>
    <p>L'ultima stanza è finalmente un'area sicura. Raccogli l'ultima Poké Ball e sali la scala per raggiungere l'uscita del dungeon.</p>

    <p>Una volta uscito, riceverai i tuoi punti in base a quanti allenatori hai sconfitto:</p>
    <ul>
        <li><strong>Completamento normale (solo obbligatorio):</strong> <span class="badge badge-points">15 punti</span>.</li>
        <li><strong>Full Clear (tutti gli allenatori sconfitti):</strong> <span class="badge badge-points">25 punti</span>.</li>
    </ul>
</section>

<section id="torrelotta">
    <h2>🏆 ROUTE 5 e TORRE LOTTA</h2>
    <p>Una volta uscito dalle rovine, ti troverai nella <strong>Route 5</strong>. Raccogli subito la <strong>Poké Ball</strong> di fronte a te. Il sentiero si divide in due direzioni:</p>
    <ul>
        <li><strong>Verso il basso:</strong> Troverai un Centro Pokémon dove potrai curare la tua squadra e raccogliere un'altra <strong>Poké Ball</strong>. Troverai poi un sentiero con <strong>diversi allenatori</strong> da sfidare e <strong>numerosi oggetti</strong> da raccogliere</li>
        <li><strong>A sinistra:</strong> Arriverai all'area della <strong>Torre Lotta</strong>.</li>
    </ul>

    <h3>TORRE LOTTA</h3>
    <p>La Torre Lotta è una delle sfide opzionali più impegnative del gioco. Qui affronterai una serie di lotte <strong>1 contro 1</strong> contro i Pokémon registrati da altri giocatori.</p>

    <h4>COME FUNZIONA</h4>
    <ul>
        <li><strong>Struttura:</strong> La Torre è composta da 25 piani, con un avversario per ogni piano.</li>
        <li><strong>Regole di Scontro:</strong> Non è permesso usare strumenti di cura durante le battaglie. Il tuo Pokémon sarà impostato a livello 50 e verrà curato automaticamente al termine di ogni scontro</li>
        <li><strong>Ricompense:</strong> Riceverai un premio dopo aver completato ogni piano.</li>
        <li><strong>Progressione:</strong> Dopo ogni vittoria, vai nell'angolo in alto a destra raccogli la borsa per le ricompense, sali le scale e interagendo con la receptionist potrai scegliere se continuare la scalata o ritirarti, conservando i premi ottenuti fino a quel momento. <strong>Ricordati che se verrai sconfitto la tua run terminerà.</strong></li>
        <li><strong>Missione stagionale</strong>: Non dimenticare la missione stagionale legata alla Torre Lotta. L'obiettivo è registrare 35 Pokémon..</li>
    </ul>

    <p>Prima di iniziare la sfida, all'ingresso della torre, sulla destra, troverai un armadietto che funge da Stash. Usalo per depositare o ritirare oggetti e preparare il tuo Pokémon al meglio. Quando sei pronto, parla con l'addetta alla reception e scegli l'aspetto che desideri usare durante la scalata della Torre Lotta.</p>

    <h3>FARMING ROUTE 5</h3>
    <p>Prendendo il sentiero che scende verso il basso, entrerai in un'area ricca di sfide e ricompense.</p>
    <ul>
        <li><strong>Allenatori e Oggetti:</strong> in quest'area si troveranno <strong>8 allenatori</strong> allenatori e <strong>7 Poké Ball</strong>.</li>
        <li><strong>Meteo:</strong> Fai attenzione, il meteo di ogni lotta sarà sempre <strong>pioggia battente (Rain con campo elettrico)</strong>.</li>
        <li><strong>Cure:</strong> Non si tratta di un dungeon, quindi puoi tornare dall'infermiera al Centro Pokémon per curare la tua squadra ogni volta che ne hai bisogno.</li>
    </ul>

    <p>Questa zona è un'area di farming. Puoi affrontare gli allenatori nell'ordine che preferisci.</p>
</section>

<section id="selva">
    <h2>🌴 SELVA LALOA (DUNGEON)</h2>
    <p>Una volta che avrai sconfitto tutti gli allenatori in quest'area, torna a curarti e sarai pronto per proseguire. Dirigiti a destra, attraversando il ponte e sali verso l'alto. Interagisci con gli alberi in alto a destra per scoprire un passaggio segreto che conduce alla Selva Laloa.</p>

    <div class="warning-box">
<strong>⚠️ ATTENZIONE:</strong><p>La Selva Laloa è un <strong>dungeon</strong>. Preparati bene prima di entrare, perché <strong>non potrai curare i tuoi Pokémon</strong> <strong>dall'infermiera</strong> tra una battaglia e l'altra fino a quando non avrai trovato l'uscita.</p></div>

    <p>Tutte le battaglie in questa selva si svolgeranno sotto una <strong>pioggia (Rain)</strong>. Il dungeon contiene <strong>7 allenatori</strong> (<strong>2 Obbligatori</strong>) e <strong>6 Poké Ball</strong>.</p>

    <h3>PERCORSO INIZIALE</h3>
    <ol>
        <li>Appena entri, scendi verso destra. Incontrerai un <strong>Montanaro (Obbligatorio)</strong> con 2 Pokémon (livello 35 e 36). Devi sconfiggerlo per proseguire.</li>
        <li>Dopo lo scontro, raccogli la <strong>Poké Ball</strong>.</li>
        <li>Proseguendo, troverai un'<strong>Allenatrice</strong> con 1 Pokémon (livello 29) <strong>(Obbligatoria)</strong>.</li>
        <li>Salendo, arriverai al primo <strong>bivio</strong>.</li>
    </ol>

    <h3>IL PRIMO BIVIO</h3>
    <p>Da questo punto, hai tre opzioni:</p>
    <ul>
        <li><strong>Verso il basso:</strong> Questo sentiero ti permette di recuperare una <strong>Poké Ball</strong>, ma ti riporterà all'ingresso della selva.</li>
        <li><strong>A sinistra:</strong> Troverai un <strong>Allenatore</strong> <strong>(Necessario per Poké Ball)</strong> (2 Pokémon di livello 27) e una <strong>Poké Ball</strong>, ma il percorso finisce in un <strong>vicolo cieco</strong>.</li>
        <li><strong>A destra (Percorso Principale):</strong> Questa è la via per proseguire nell'esplorazione.</li>
    </ul>

    <p>Imboccando il sentiero di destra, continua il tuo cammino:</p>
    <ol>
        <li>Incontrerai un'<strong>Allenatrice (Opzionale ma si gira)</strong> con 2 Pokémon (livello 30).</li>
        <li>Subito dopo, raccogli la <strong>Poké Ball</strong>.</li>
        <li>Scendendo, arriverai a un <strong>secondo bivio</strong>.</li>
    </ol>

    <h3>IL SECONDO BIVIO</h3>
    <p>Anche qui, hai due scelte:</p>
    <ul>
        <li><strong>Verso l'alto (Opzionale):</strong> Qui puoi raccogliere una <strong>Poké Ball</strong> e affrontare un <strong>Allenatore</strong> con 2 Pokémon (livello 33). Sconfiggendolo otterrete <strong>10 megashard. Attenzione</strong>: per far sì che queste shard vengano conteggiate dovrete suprare indenni il dungeon; se morirete da un trainer successivo queste shard verranno perse.</li>
        <li><strong>Verso il basso (Percorso Principale):</strong> Questa è la strada che porta all'uscita. Proseguendo su questo sentiero:
            <ol>
                <li>Troverai un <strong>Allenatore (Opzionale ma si gira)</strong> con 1 Pokémon (livello 39).</li>
                <li>Successivamente, un altro <strong>Allenatore (Opzionale ma blocca item)</strong> con 3 Pokémon (due di livello 35, uno di livello 36). Sconfiggilo per sbloccare e raccogliere l'ultima <strong>Poké Ball</strong>.</li>
                <li>Infine, sali verso l'alto per trovare il passaggio nel monte che conduce alla nuova area: il <strong>Fiume Tuhala</strong>.</li>
            </ol>
        </li>
    </ul>

    <p>Una volta uscito, riceverai i tuoi punti in base a quanti allenatori hai sconfitto:</p>
    <ul>
        <li><strong>Completamento normale (solo obbligatori):</strong> <span class="badge badge-points">10 punti</span>.</li>
        <li><strong>Full Clear (tutti gli allenatori sconfitti):</strong> <span class="badge badge-points">20 punti</span>.</li>
    </ul>
</section>

<section id="cascate">
    <h2>💧 FIUME TUHALA (DUNGEON)</h2>
    <p>Appena arrivato nell'area del Fiume Tuhala, una recluta del Team Plasma ti parlerà per poi fuggire senza combattere. Prima di proseguire, parla con l'infermiera per curare la tua squadra. Quando sei pronto, dirigiti <strong>sotto la cascata</strong> per scoprire l'ingresso segreto del dungeon del Fiume Tuhala.</p>

    <div class="warning-box">
        <strong>⚠️ ATTENZIONE: SCONFIGGI PRIMA LE RECLUTE!</strong><br>
        Questo dungeon è composto da <strong>5 Reclute del Team Plasma</strong> (2 obbligatorie, 3 opzionali) più la battaglia finale con <strong>Acromio</strong>. Le reclute <strong>scompariranno tutte non appena inizierai lo scontro con Acromio</strong>. Se punti al "Full Clear" per ottenere il massimo dei punti, assicurati di averle sconfitte tutte prima di raggiungere il boss.
    </div>

    <h3>PERCORSO VERSO ACROMIO</h3>
    <p>Segui questo percorso per trovare tutte le reclute e gli oggetti (<strong>Attenzione</strong>: alla sconfitta di Acromio tutte le reclute scompariranno):</p>
    <ol>
        <li><strong>Prima Recluta (all'ingresso)(Obbligatoria):</strong> 3 Pokémon (livello 29).</li>
        <li>Scendi le scale. Raccogli la <strong>Poké Ball</strong> e affronta la <strong>Seconda Recluta (Opzionale ma si gira):</strong> 2 Pokémon (livello 30).</li>
        <li>Prosegui sulla destra per trovare la <strong>Terza Recluta (Obbligatoria)</strong> (1 Pokémon, livello 30) e un'altra <strong>Poké Ball</strong>.</li>
        <li>Continuando, incontrerai la <strong>Quarta Recluta</strong> <strong>(Opzionale passando a destra)</strong>(1 Pokémon, livello 30).</li>
        <li>Infine, ti attende la <strong>Quinta e ultima Recluta (Opzionale)</strong> con 4 Pokémon (uno di livello 27, due di livello 33 e uno di livello 30).</li>
        <li>Dopo quest'ultimo scontro, il sentiero si divide. Vai in <strong>alto a destra</strong> per raccogliere una <strong>Poké Ball</strong> (qui troverai anche l'uscita del dungeon, ma sarà bloccata fino alla sconfitta del boss). La via a <strong>sinistra</strong> ti porterà invece da Acromio.</li>
    </ol>

    <h3>SFIDA FINALE: ACROMIO</h3>
    <p>Preparati allo scontro. Come negli scontri precedenti, se Acromio possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).</p>

    <p><strong>Acromio</strong> schiererà <strong>3 Pokémon </strong> e avrà <strong class="badge badge-cure">2 Super Pozioni</strong>:</p>
    <ul>
        <li>Due Pokémon di livello 42.</li>
        <li>Un Pokémon di livello 48.</li>
    </ul>

    <p>Sconfiggilo per ottenere <strong>10 Megashard</strong>.</p>

    <p>Una volta sconfitto Acromio, torna indietro fino al bivio precedente. Questa volta, prendi il sentiero verso l'<strong>alto</strong>. Scendi le scale e prosegui dritto per trovare finalmente l'uscita.</p>

    <h4>RICOMPENSA DEL DUNGEON</h4>
    <ul>
        <li><strong>Completamento solo obbligatori:</strong><span class="badge badge-points">30 punti</span></li>
        <li><strong>Full Clear (sconfiggendo tutte le reclute e Acromio):</strong> <span class="badge badge-points">50 punti</span>.</li>
    </ul>
</section>

<section id="shountal">
    <h2>👻 LUMINE CITY (4° PALESTRA)</h2>
    <p>La prossima grande sfida ti attende nella Palestra della città, dove dovrai affrontare la <strong>Capopalestra Shountal</strong>, assicurati di aver curato e dirigiti in alto a destra per la palestra.</p>

    <h3>QUARTA PALESTRA: SHOUNTAL</h3>
    <div class="warning-box">
        <strong>Nota importante sullo scontro finale:</strong> Nello scontro con <strong>Shountal</strong>, fai attenzione: se possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).
    </div>

    <h4>ALLENATORI DELLA PALESTRA</h4>
    <ul>
        <li><strong>Allenatori della Palestra (x4):</strong> Ciascuno di loro ha 1 Pokémon di livello 35.</li>
        <li><strong>Shountal (Capopalestra):</strong> 6 Pokémon (4 di livello 36, 1 di livello 39 e l'asso di livello 44). Shountal avrà anche <strong class="badge badge-cure">2 Iper Pozioni</strong>.</li>
    </ul>

    <h4>RICOMPENSA DELLA PALESTRA</h4>
    <p>Una volta sconfitta Shountal riceverai <span class="badge badge-points">20 punti</span>, ti regalerà la <span class="badge badge-tm">💿 TM50</span>. Attenzione: il tuo Pokémon avrà il 50% di probabilità di apprenderla.</p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚.</strong></p>

    <h3>MOLO LUMINE</h3>
    <p>Terminata la battaglia, cura la tua squadra dall'infermiera. Dirigiti quindi verso l'alto per raggiungere il <strong>Molo Lumine</strong>.</p>

    <p>Qui, parla con il marinaio vicino al traghetto. Ti offrirà due destinazioni:</p>
    <ul>
        <li><strong>Tornare a Route 1:</strong> Scegli questa opzione se hai bisogno di usare la Stash nella città iniziale. Non preoccuparti, potrai poi parlare con il marinaio a Route 1 per ritornare qui.</li>
        <li><strong>Attenzione: questa sarà la tua ultima chance per comprare pacchetti</strong> all'interno della run, quindi pondera le tue scelte attentamente. Se pensi che ne valga la pena spendere crediti in cerca di cure ed altri item fallo ora o mai più.</li>
        <li><strong>Proseguire per Porto Kamei:</strong> Questa è la via per continuare la tua avventura.</li>
    </ul>
</section>

<section id="dune">
    <h2>🏜️ PORTO KAMEI e DUNE MERAKAI</h2>
    <p>Una volta arrivato a <strong>Porto Kamei</strong>, ti troverai in una piccola area di passaggio. Qui potrai:</p>
    <ul>
        <li>Parlare con l'<strong>infermiera</strong> per curare la tua squadra, se non l'hai già fatto.</li>
        <li>Trovare l'ingresso per la prossima area: dirigiti in <strong>alto a destra</strong> per entrare nelle <strong>Dune Merakai</strong>.</li>
    </ul>

    <h3>DUNE MERAKAI (DUNGEON)</h3>
    <p>Le Dune Merakai sono un <strong>dungeon</strong>. Preparati bene, perché <strong>non potrai curarti</strong> tra una battaglia e l'altra. Questo vasto dungeon contiene <strong>11 allenatori e 12 Poké Ball</strong>. Tutti i trainer sono <strong>opzionali</strong>, ma alcuni saranno più complicati da evitare, ed è comunque consigliato sconfiggerne il più possibile per livellare il proprio pokemon.</p>

    <div class="info-box">
        <strong>Tempesta di Sabbia:</strong> Fai attenzione! Diverse battaglie in quest'area si svolgeranno sotto una <strong>Tempesta di Sabbia (Sandstorm)</strong>.
        <p><strong>In quest'area anche se userete il Wild Attract non incontrerete nessun selvatico</strong>.</p>
    </div>

    <h4>PRIMA AREA</h4>
    <ul>
        <li><strong>Verso l'alto:</strong> Affronterai un'<strong>Allenatrice</strong> (1 Pokémon, livello 48) e troverai una <strong>Poké Ball</strong>.</li>
        <li><strong>A destra:</strong> Troverai un <strong>Montanaro</strong> (1 Pokémon, livello 39) che blocca una <strong>Poké Ball</strong>. <strong>(Battaglia con Sandstorm)</strong>.</li>
    </ul>

    <h4>L'AREA CENTRALE</h4>
    <p>In questa zona troverai diversi allenatori e oggetti:</p>
    <ul>
        <li><strong>A destra:</strong> Un <strong>Karateka</strong> (1 Pokémon, livello 47) e una <strong>Poké Ball</strong>.</li>
        <li><strong>Al centro:</strong> Una <strong>Ragazza</strong> (2 Pokémon, livello 38) con una <strong>Poké Ball</strong> nascosta dietro di lei.</li>
        <li><strong>A sinistra:</strong> Un <strong>Bimbo</strong> (1 Pokémon, livello 39) che blocca una <strong>Poké Ball</strong>. <strong>(Battaglia con Sandstorm)</strong>.</li>
    </ul>

    <h4>VERSO L'USCITA</h4>
    <p>Prosegui verso l'alto dalla zona centrale per continuare.</p>
    <ul>
        <li><strong>Recluta Team Plasma:</strong> 3 Pokémon (due di livello 39, uno di livello 42). <strong>(Battaglia con Sandstorm)</strong>. Sconfiggendolo otterrai <strong>10 Megashard. Attenzione</strong>: per far sì che queste shard vengano conteggiate dovrete suprare indenni il dungeon; se morirete da un trainer successivo queste shard verranno perse. Alla sua sinistra c'è una <strong>Poké Ball</strong>.</li>
        <li><strong>A sinistra:</strong> Un <strong>Marinario</strong> (2 Pokémon, livello 38) e una <strong>Poké Ball</strong>.</li>
        <li><strong>A sinistra sopra le scale:</strong> Un'<strong>Allenatrice</strong> con un team completo di 6 Pokémon (tutti livello 39) e una <strong>Poké Ball</strong>.</li>
        <li><strong>A destra:</strong> Una <strong>Bimba</strong> (1 Pokémon, livello 39) e una <strong>Poké Ball</strong>.</li>
    </ul>

    <h4>IL BIVIO FINALE</h4>
    <ul>
        <li><strong>A SINISTRA (Vicolo Cieco):</strong> Questo sentiero ti ricompenserà con <strong>2 Poké Ball</strong>, e ci sarà un <strong>Allenatore</strong> (2 Pokémon, livello 38) in una battaglia con <strong>Sandstorm</strong>.</li>
        <li><strong>AL CENTRO (Via per l'Uscita):</strong> Questa è la strada principale per uscire dal dungeon.</li>
        <li><strong>A DESTRA:</strong> Affronta un <strong>Allenatore</strong> (1 Pokémon, livello 47), raccogli la <strong>Poké Ball</strong> in cima e poi ricongiungiti al sentiero centrale per l'uscita.</li>
    </ul>

    <h4>RICOMPENSA DEL DUNGEON</h4>
    <ul>
        <li><strong>Completamento normale:</strong> <span class="badge badge-points">30 punti</span>.</li>
        <li><strong>Full Clear (sconfiggendo tutti gli allenatori):</strong> <span class="badge badge-points">40 punti</span>.</li>
    </ul>
</section>

<section id="lenora">
    <h2>📚 KAMEI CITY (5° PALESTRA)</h2>
    <p>Uscito dalle dune, arriverai a <strong>Kamei City</strong>. La tua prima tappa dovrebbe essere il Centro Pokémon per curare la tua squadra. Una volta pronto, preparati ad affrontare la quinta Palestra del gioco.</p>

    <h3>QUINTA PALESTRA: LENORA</h3>
    <p>La Palestra è difesa da <strong>7 allenatori</strong> prima di poter raggiungere la Capopalestra <strong>Lenora</strong>.</p>

    <div class="warning-box">
        <strong>Nota importante sullo scontro finale:</strong> Nello scontro con <strong>Lenora</strong>, fai attenzione: se possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).
    </div>

    <h4>ALLENATORI DELLA PALESTRA</h4>
    <ul>
        <li><strong>Allenatori della Palestra (x7):</strong> Ciascuno di loro ha 1 Pokémon di livello 39. <strong>Attenzione</strong>: ognuno di questi trainer avrà <strong class="badge badge-cure">1 Full restore</strong>, possono rendere la via verso il capopalestra particolarmente ostica.</li>
        <li><strong>Lenora (Capopalestra):</strong> 6 Pokémon (quattro di livello 41, uno di livello 44 e l'asso di livello 47). Lenora avrà anche <strong class="badge badge-cure">2 Iper Pozioni</strong>.</li>
    </ul>

    <h4>RICOMPENSA DELLA PALESTRA</h4>
    <p>Una volta sconfitto Lenora riceverai <span class="badge badge-points">40 punti</span>, ti regalerà la <span class="badge badge-tm">💿 TM42</span>. Attenzione: il tuo Pokémon avrà il 50% di probabilità di apprenderla.</p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚.</strong></p>

    <p>Dopo esserti curato, dirigiti verso l'alto ed entra nel varco per continuare la tua avventura.</p>
</section>

<section id="rivale">
    <h2>⚔️ ROUTE 6 e RIVALE N</h2>
    <p>Sei entrato in un'area pensata per il farming. Vicino alla casa iniziale, noterai un'<strong>anziana che curerà il tuo Pokémon</strong> ogni volta che le parlerai. Sfruttala per affrontare tutte le sfide senza preoccupazioni.</p>
   <div class="warning-box">
        <strong>⚠️ SUGGERIMENTO</strong><br>
        <p>Dopo aver affrontato i primi  <strong>2 allenatori</strong> evita i successivi <strong>3</strong>. Recati <strong>subito in alto</strong> dove ti attenderà la battaglia con <strong>N</strong>. Poi recupera i 3 allenatori.</p>
        La prima allenatrice dell'area avrà <strong class="badge badge-cure">1 Full Restore</strong>.
    </div>

    <h3>SFIDA: RIVALE N</h3>
    <ul>
        <li><strong>N schiererà 3 Pokémon:</strong> due di livello 44 e uno di livello 47. Se ha un Pokémon che può <strong>Mega evolversi</strong> lo farà.</li>
        <li>Una volta sconfitto riceverete <span class="badge badge-points">5 punti</span> e </li> avrai inoltre il <strong>10% di possibilità di droppare 1 uovo 🥚</strong>.</p>
    </ul>

    <p>Una volta sconfitti tutti gli allenatori, rifai il giro del lago per raggiungere la grande struttura in alto a destra ed entra.</p>
    <ul>
        <li><strong>Come prima cosa, parla con la receptionist</strong> sulla destra per curare il tuo Pokémon.</li>
        <li>Cambia stanza, raccogli la <strong>Poké Ball</strong> e attraversa il cancelletto sulla sinistra.</li>
    </ul>

    <p>Questo ti farà salire sul treno, la prossima area della tua avventura.
 <div class="warning-box">
<strong>⚠️ATTENZIONE</strong><br>
Il treno è un <strong>dungeon</strong>. Preparati bene prima di entrare, perché non potrai curare i tuoi Pokémon dall'infermiera tra una battaglia e l'altra fino a quando non avrai trovato l'uscita.</p> </div>
</section>

<section id="treno">
    <h2>🚂 TRENO (DUNGEON)</h2>
    <p>Il treno è composto da <strong>tre vagoni</strong>, con un totale di <strong>9 allenatori</strong> (Tutti opzionali passando larghi) e 1 Poké Ball.</p>

    <h3>Primo Vagone</h3>
    <ul>
        <li><strong>Ragazza in basso:</strong> 1 Pokémon (livello 42).</li>
        <li><strong>Vecchio al centro:</strong> 2 Pokémon (entrambi livello 41).</li>
        <li><strong>Ragazzo in alto:</strong> 2 Pokémon (entrambi livello 38).</li>
    </ul>

    <h3>Secondo Vagone</h3>
    <ul>
        <li><strong>Primo Allenatore:</strong> 2 Pokémon (entrambi livello 38).</li>
        <li>Raccogli la <strong>Poké Ball</strong>.</li>
        <li><strong>Seconda Allenatrice:</strong> 2 Pokémon (entrambi livello 41).</li>
    </ul>

    <h3>Terzo Vagone (Uscita)</h3>
    <ul>
        <li><strong>Primo Allenatore:</strong> 1 Pokémon (livello 39).</li>
        <li><strong>Secondo Allenatore:</strong> 3 Pokémon (tutti livello 39).</li>
        <li><strong>Terzo Allenatore:</strong> 1 Pokémon (livello 39).</li>
        <li><strong>Quarto Allenatore:</strong> 2 Pokémon (entrambi livello 42).</li>
    </ul>

    <p>Una volta terminate le battaglie, puoi uscire dal treno attraverso l'apertura sulla destra in quest'ultimo vagone.</p>

    <h4>RICOMPENSA DEL DUNGEON</h4>
    <ul>
        <li><strong>Completamento normale:</strong><span class="badge badge-points">5 punti</span></li>
        <li><strong>Full Clear (sconfiggendo tutti gli allenatori):</strong> <span class="badge badge-points">15 punti</span>.</li>
    </ul>

    <p>Una volta sceso dal treno, esci dall'area recintata. Ricorda di tornare indietro dalla receptionist per curare il tuo Pokémon. Quando sei pronto, esci dalla stazione per entrare finalmente a <strong>Miralia City</strong>.</p>
</section>

<section id="rafan">
    <h2>🦅 MIRALIA CITY (6° PALESTRA)</h2>
    <p>Una volta entrato a Miralia City, prenditi un momento per esplorare. Potrai trovare:</p>
    <ul>
        <li>Una <strong>Poké Ball</strong> subito all'ingresso.</li>
        <li>Un'altra <strong>Poké Ball</strong> nella zona più in basso.</li>
    </ul>

    <p>Dopo aver curato la tua squadra al Centro Pokémon, sarai pronto per affrontare la prossima grande sfida: la sesta Palestra, guidata da Rafan.</p>

    <h3>SESTA PALESTRA: RAFAN</h3>
    <p>La sesta Palestra è composta da 6 allenatori prima dello scontro finale con il Capopalestra Rafan.</p>

    <div class="warning-box">
        <strong>Nota importante sullo scontro finale:</strong> Nello scontro con Rafan, fai attenzione: se possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).
    </div>

    <h4>ALLENATORI DELLA PALESTRA</h4>
    <ul>
        <li><strong>Prima Allenatrice:</strong> 3 Pokémon (tutti livello 41).</li>
        <li>Salendo le scale a sinistra, affronterai in sequenza:</li>
        <li><strong>Secondo Allenatore:</strong> 1 Pokémon (livello 45).</li>
        <li><strong>Terzo Allenatore:</strong> 3 Pokémon (tutti livello 41).</li>
        <li><strong>Quarto Allenatore:</strong> 1 Pokémon (livello 45).</li>
        <li><strong>Quinta Allenatrice:</strong> 2 Pokémon (entrambi livello 44).</li>
        <li><strong>Sesto Allenatore:</strong> 2 Pokémon (entrambi livello 44).</li>
        <li><strong>Rafan (Capopalestra):</strong> 6 Pokémon (tre di livello 44, uno di livello 45, uno di livello 47 e l'asso di livello 50). Rafan avrà anche <strong class="badge badge-cure">2 Iper Pozioni</strong>.</li>
    </ul>

    <p>Una volta sconfitto Rafan riceverai <span class="badge badge-points">20 punti</span>, ti regalerà la <span class="badge badge-tm">💿 TM40</span>. Attenzione: il tuo Pokémon avrà il <strong>50% di probabilità di apprenderla</strong>.</p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚.</strong></p>

    <p>Dopo aver battuto la Palestra, cura la tua squadra dall'infermiera e prosegui verso il basso. Troverai un marinaio che ti offrirà due destinazioni:</p>
    <ul>
        <li><strong>Tornare a Route 1:</strong> Scegli questa opzione se hai bisogno di usare la Stash nella città iniziale. Non preoccuparti, potrai poi parlare con il marinaio a Route 1 per ritornare qui.</li>
        <li><strong>Proseguire per la Route 7:</strong> Questa è la via per continuare la tua avventura.</li>
    </ul>
</section>

<section id="monte">
    <h2>⛰️ ROUTE 7 e MONTE OROKAI</h2>
    <p>La Route 7 è un'area di farming. Non è un dungeon, quindi potrai tornare a curarti quando vuoi.</p>

    <p>Una volta sconfitti gli allenatori, prosegui verso l'alto. Troverai un'infermiera che curerà la tua squadra. Noterai due reclute del Team Plasma che bloccano il passaggio: non preoccuparti, scapperanno appena ti avvicinerai, lasciandoti via libera.</p>

    <p>Continua a salire e raccogli le 3 Poké Ball che vedi lungo il sentiero. Sulla destra, noterai un nuovo pozzo.</p>

    <h3>LA SFIDA DEL POZZO (OPZIONALE)</h3>
    <p>Interagendo con il pozzo, troverai un uomo che ti lancerà una sfida.</p>
    <ul>
        <li><strong>Team:</strong> 6 Pokémon, tutti di 10 livelli sotto il tuo. Se ha un Pokémon che può <strong>Mega evolversi</strong> lo farà.</li>
        <li><strong>Ricompensa:</strong> Se riuscirai a sconfiggerlo, ti regalerà 3 oggetti.</li>
    </ul>

    <p>Se hai affrontato la difficile sfida del pozzo, torna a curarti dall'infermiera un'ultima volta. Quando sei pronto, entra nel varco nella montagna per accedere al <strong>Monte Orokai</strong>. 
<div class="warning-box">
<strong>⚠️ATTENZIONE</strong><br>
Il Monte Orokai è un <strong>dungeon</strong>. Preparati bene prima di entrare, perché non potrai curare i tuoi Pokémon dall'infermiera tra una battaglia e l'altra fino a quando non avrai trovato l'uscita.</p> </div>
</section>

    <h3>MONTE OROKAI (DUNGEON)</h3>
    <p>Il percorso è una combinazione di battaglie contro il Team Plasma e puzzle sul ghiaccio. Nel monte Orokai troverete <strong>4 reclute del team Plasma (tutte obbligatorie)</strong> e <strong>4 Poké Ball</strong>.</p>

    <ul>
        <li><strong>Prima recluta: </strong> 2 Pokémon, entrambi livello 45.</li>
        <li><strong>Seconda: </strong>1 Pokémon, livello 48.</li>
        <li><strong>Terza: </strong>1 Pokémon, livello 48.</li>
	<li><strong>Quarta: </strong>2 Pokémon, entrambi livello 45.</li>
    </ul>

    <a href="https://www.twitch.tv/droodthund3r/clip/VenomousBumblingSquidCoolCat-fp5-ogWXZqBWoiRP" target="_blank">Soluzione 1° minigioco</a></p>
    <a href="https://www.twitch.tv/droodthund3r/clip/InexpensiveTriumphantPartridgeLeeroyJenkins-RGNE0O2RvM7LVaFk" target="_blank">Soluzione 2° minigioco</a>
    

    <h4>RICOMPENSA DEL MONTE OROKAI</h4>
    <p>Full Clear (obbligatorio): <span class="badge badge-points">10 punti</span>.</p>
</section>

<section id="plasma">
    <h2>💀 ROUTE 8 e TEAM PLASMA</h2>
    <p>Uscito dal Monte Orokai, ti troverai nella Route 8, una vasta area di farming. Potrai curarti spesso grazie alle infermiere presenti, quindi non esitare ad affrontare tutti gli allenatori. Numerosi allenatori avranno anche <strong class="badge badge-cure">1 Full Restore</strong>.</p>
    <p>Dirigiti verso la grande struttura in alto a destra. Fuori dall'edificio, ti attende un Allenatore. Prosegui a destra per raccogliere un'ultima Poké Ball. Sali le scale ed entra nella grotta. Al suo interno troverai 2 Poké Ball. Esci dall'altro lato per arrivare finalmente a <strong>Mindra City</strong>.</p>

    <p>L'arrivo a Mindra City ti serve principalmente per raccogliere le Poké Ball in città. Curati al Centro Pokémon e poi torna indietro fino alla grande struttura che hai superato prima della grotta. Quella è la tua vera destinazione: la <strong>Torre Plasma</strong>.</p>

    <h3>TORRE PLASMA</h3>
    <p>Una volta entrato nella Torre, noterai subito una receptionist. Parlale ogni volta che hai bisogno di curare la tua squadra. La Torre Plasma è il punto di accesso a due dungeon separati. Per proseguire correttamente nella storia, dovrai affrontarli in un ordine preciso: prima quello a sinistra e poi quello in alto a destra.</p>
</section>

<section id="plasma-underground">
    <h3>PLASMA UNDERGROUND</h3>
    <p>Per iniziare, dirigiti verso le scale situate in alto a sinistra. Questo ti condurrà al primo dungeon: il Plasma Underground. 
    <div class="warning-box">
    <strong>⚠️ATTENZIONE</strong><br>
    Il Plasma Underground è un <strong>dungeon</strong>. Preparati bene prima di entrare, perché non potrai curarti tra le battaglie fino a quando non avrai trovato l'uscita.</p> </div>

    <p>Questo dungeon contiene <strong>16 reclute del Team Plasma</strong>, il tuo rivale N e <strong>12 Poké Ball</strong>.</p>
    <div class="warning-box">
        <strong>⚠️ INFO SUL PERCORSO</strong><br>
        Fai molta attenzione a questo dettaglio: La sida con N potrebbe essere particormente difficoltosa, è consigliabile affrontare  <strong>solo gli obbligatori</strong> e poi andare da N, e solo successivamente affrontare le Reclute opzionali   </div>

    <h3>PRIMA PARTE: </h3>
    <p>Segui questi passaggi, ignorando per ora i bivi e gli allenatori opzionali.</p>
    <ul>
        <li>Affronta la prima Recluta (<strong>Obbligatoria</strong>) subito a sinistra (1 Pokémon, livello 44).</li>
        <li>Al bivio, vai verso il basso. Raccogli la <strong>Poké Ball</strong> a sinistra, poi prosegui a sinistra e sconfiggi la seconda Recluta (<strong>Obbligatoria</strong>) (1 Pokémon, livello 44).</li>
        <li>Ignora la recluta che vedi scendendo e affronta quella in basso (<strong>Obbligatoria</strong>) (1 Pokémon, livello 44).</li>
        <li>Prendi le scale in basso a sinistra per scendere al piano inferiore.</li>
        <li>Al bivio, scendi verso il basso, raccogli la <strong>Poké Ball</strong> e evita la recluta <em>(attenzione che si gira)</em>, poi prendi la scala in basso a destra.</li>
        <li>Sali e sconfiggi la Recluta (<strong>Obbligatoria</strong>) che blocca il passaggio (1 Pokémon, livello 44). Raccogli la <strong>Poké Ball</strong>.</li>
        <li>Scendi le scale e prosegui verso la grande stanza centrale sulla destra.</li>
    </ul>

    <h3>SFIDA: RIVALE N</h3>
    <p>Appena entrerai nella stanza, partirà la battaglia con N.</p>
    <ul>
        <li><strong>Team di N:</strong> 5 Pokémon (tre di livello 56, uno di livello 57 e l'asso di livello 59).</li>
        <li><strong>Nota:</strong> Potrà megaevolvere un Pokémon, quindi la sfida è molto impegnativa.</li>
    </ul>
    <p>Una volta sconfitto, potrai raccogliere le <strong>3 Poké Ball</strong> al centro della stanza e avrai inoltre il <strong>10% 	di possibilità di droppare 1 uovo 🥚</strong>.</p>

    <h3>SECONDA PARTE: Full Clear (Opzionali)</h3>
    <p>Ora che N è stato sconfitto, è il momento di tornare indietro per sconfiggere tutte le reclute opzionali e raccogliere le Poké Ball rimanenti.</p>

    <h4>Area di N</h4>
    <ul>
        <li>Sali sulle scale a sinistra della stanza di N. Troverai una Recluta che blocca una <strong>Poké Ball</strong>. Sconfiggila (1 Pokémon, livello 44), poi torna indietro di due stanze.</li>
    </ul>

    <h4>Piano Inferiore</h4>
    <ul>
        <li>Scendi le scale, vai verso sinistra e sali nella stanza centrale per recuperare una <strong>Poké Ball</strong>. Qui troverai anche <strong>2 Reclute </strong> (entrambe con 1 Pokémon, livello 44).</li>
        <li>Torna indietro e vai a sinistra. Affronta la Recluta (<strong>Obbligatoria per passare</strong>) (1 Pokémon, livello 44).</li>
        <li>Entra nella stanza a sinistra per una <strong>Poké Ball</strong> e una <strong>Recluta</strong> (1 Pokémon, livello 44).</li>
        <li>Sali nel corridoio e sconfiggi la Recluta che blocca il passaggio (1 Pokémon, livello 44).</li>
        <li>Sali nuovamente e sconfiggi la Recluta opzionale nel corridoio sotto la scala (1 Pokémon, livello 44).</li>
    </ul>

    <h4>Piano Superiore (Area Iniziale)</h4>
    <ul>
        <li>Prendi le scale per tornare nella stanza d'ingresso.</li>
        <li>Vai a sinistra e sconfiggi la <strong>Recluta opzionale</strong> (1 Pokémon, livello 44).</li>
        <li>Sconfiggi la Recluta che blocca una <strong>Poké Ball</strong> (1 Pokémon, livello 44).</li>
        <li>Raccogli la Poké Ball successiva, ma fai attenzione alla Recluta che si gira (2 Pokémon, livello 42).</li>
        <li>Procedi verso l’alto e poi scendi verso il centro dell'area.</li>
        <li>Sconfiggi la Recluta (<strong>obbligatoria per Poké Ball</strong>) (4 Pokémon: livelli 39, 42, 45, 50).</li>
        <li>Sconfiggi la Recluta successiva (<strong>obbligatoria per Poké Ball</strong>) (1 Pokémon, livello 44).</li>
        <li>Infine, sconfiggi la Recluta opzionale sulla destra (2 Pokémon, livello 44).</li>
    </ul>

<h4>RICOMPENSA PLASMA UNDERGROUND</h4>
        <li><strong>Completamento normale (N più obbligatori):</strong><span class="badge badge-points">25 punti</span></li>
        <li><strong>Full Clear (sconfiggendo tutte le reclute e N):</strong> <span class="badge badge-points">35 punti</span>.</li>
    </ul>
</section>

<section id="plasma-tower">
    <h3>PLASMA TOWER</h3>
    <p>Curati dalla receptionist, poi dirigiti nell'angolo in alto a destra. Parla con l'ascensore: si aprirà un passaggio che ti condurrà al prossimo dungeon.</p>

    <p>Questo dungeon contiene <strong>12 allenatori</strong> e la battaglia con <strong>Acromio</strong>.</p>
<div class="warning-box">
        <strong>⚠️ INFO SUL PERCORSO</strong><br>
        Anche qui, la scelta più conveniente è affrontare </strong> solo le reclute obbligatorie</strong> per raggiungere Acromio, sconfiggerlo, e solo dopo tornare indietro per affrontare gli avversari opzionali e raccogliere tutti gli oggetti.   </div>


    <h3>PRIMA PARTE:</h3>
    <p>Segui questo percorso, prestando molta attenzione agli allenatori che si girano.</p>
    <ul>
        <li>Al bivio iniziale, vai a sinistra e scendi. Evita l'allenatrice che si gira nel corridoio.</li>
        <li>Entra nella prima stanza per prendere la <strong>Poké Ball</strong>, poi esci senza farti vedere dal karateka.</li>
        <li>Entra nella stanza a sinistra, passa lontano dalle reclute che si girano e raccogli la <strong>Poké Ball</strong>.</li>
        <li>Sali le scale. Nella nuova area, vai nella stanza in basso (passando da sinistra) per prendere le <strong>Poké Ball</strong>. Poi torna su.</li>
        <li>Torna in alto e vai a destra. Per ora, ignora la <strong>Poké Ball</strong> bloccata dall'allenatore.</li>
        <li>Scendi verso il basso e sali le scale per raggiungere il piano successivo.</li>
        <li>Prendi la <strong>Poké Ball</strong>, evita la recluta che si gira e affronta l'unica Recluta (<strong>Obbligatoria</strong>) nel corridoio (1 Pokémon, livello 48).</li>
        <li>Raccogli la <strong>Poké Ball</strong> nell'angolo e poi entra nella stanza di Acromio. Prendi le due <strong>Poké Ball</strong> in alto.</li>
    </ul>

    <h3>SFIDA FINALE: ACROMIO</h3>
    <p>Preparati allo scontro. Come per le sfide precedenti, anche Acromio può usare la megaevoluzione (una sola volta durante la battaglia).</p>
    <p>Acromio schiererà 3 Pokémon:</p>
    <ul>
        <li>Due Pokémon di livello 51.</li>
        <li>Un Pokémon di livello 45.</li>
    </ul>
    <p>Sconfiggilo per ottenere una ricompensa di <strong>10 Megashard</strong>.</p>

    <h3>SECONDA PARTE: FULL CLEAR (OPZIONALE)</h3>
    <p>Ora che hai sconfitto Acromio, puoi esplorare il dungeon liberamente per sconfiggere tutti gli allenatori rimasti. Valuta la salute del tuo Pokémon e decidi quali sfide affrontare.</p>

    <h4>Piano di Acromio</h4>
    <ul>
        <li><strong>Recluta opzionale:</strong> 1 Pokémon (livello 48).</li>
    </ul>

    <h4>Piano Intermedio</h4>
    <ul>
        <li><strong>Salendo:</strong> Una Recluta opzionale (1 Pokémon, livello 48).</li>
        <li><strong>Recluta (obbligatoria per la Poké Ball):</strong> 2 Pokémon (livello 47).</li>
        <li><strong>Parte sinistra:</strong> 2 Reclute opzionali, ciascuna con 1 Pokémon (livello 48).</li>
    </ul>

    <h4>Piano Iniziale</h4>
    <ul>
        <li><strong>Appena sceso dalle scale:</strong> Una Recluta opzionale (2 Pokémon, livello 47).</li>
        <li><strong>Successivamente:</strong> Una Recluta opzionale (1 Pokémon, livello 48).</li>
        <li><strong>Stanza del Karateka (si gira):</strong> Il Karateka ha 1 Pokémon (livello 48).</li>
        <li><strong>Stanza successiva:</strong> Un'Allenatrice (<strong>obbligatoria per la Poké Ball</strong>) con 1 Pokémon (livello 47).</li>
        <li><strong>Corridoio:</strong> Un'Allenatrice con 1 Pokémon (livello 48).</li>
        <li><strong>Stanza a destra:</strong> Un Allenatore (<strong>obbligatorio per la Poké Ball</strong>) con 3 Pokémon (livello 39).</li>
    </ul>



    <h4>RICOMPENSA DELLA TORRE PLASMA</h4>
    <ul>
        <li><strong>Completamento normale:</strong><span class="badge badge-points">15 punti</span></li>
        <li><strong>Full Clear (sconfiggendo tutti gli allenatori):</strong> <span class="badge badge-points">30 punti</span>.</li>
    </ul>

    <p>Una volta terminata l'esplorazione, torna indietro fino all'ingresso. Ti ritroverai di nuovo nella hall della Torre Plasma. Curati dalla receptionist un'ultima volta, poi prosegui il cammino andando a destra, attraversando la grotta e uscendo nuovamente a Mindra City.</p>
</section>

<section id="aristide">
    <h2>⚙️ MINDRA CITY (7° PALESTRA)</h2>
    <p>Una volta tornato a Mindra City, la tua penultima grande sfida ti attende. Dirigiti nella zona in basso della città per trovare la settima Palestra. Assicurati che il tuo Pokémon sia al massimo della forma e preparati a combattere.</p>

    <h3>SETTIMA PALESTRA: ARISTIDE</h3>
    <p>La settima palestra è una vera e propria prova di resistenza, con ben <strong>12 allenatori</strong> da sconfiggere prima di poter affrontare il Capopalestra Aristide.</p>

    <div class="danger-box">
        <strong>NOTE IMPORTANTI SULLO SCONTRO FINALE</strong><br>
        La battaglia contro Aristide presenta due difficoltà aggiuntive:
        <ul>
            <li><strong>Megaevoluzione:</strong> Se possiede un Pokémon in grado di megaevolversi, lo farà. <strong>Attenzione</strong>: se in campo ci saranno contemporaneamente due Pokémon in grado di megaevolversi, lo faranno entrambi.</li>
            <li><strong>Modalità di lotta (2 vs 1):</strong> Preparati a combattere in una situazione di svantaggio numerico, dove lui schiererà due Pokémon contro il tuo singolo Pokémon.</li>
        </ul>
    </div>

    <h4>ALLENATORI DELLA PALESTRA</h4>
    <ul>
        <li><strong>Allenatori della Palestra (x12):</strong> Ciascuno di loro ha 1 Pokémon di livello 54.</li>
        <li><strong>Aristide (Capopalestra):</strong> 6 Pokémon (quattro di livello 60 e due assi di livello 62). Inoltre, al contrario degli altri capipalestra, non avrà 2 ma ben <strong class="badge badge-cure">4 Iper Pozioni</strong>.</li>
    </ul>

    <p>Una volta sconfitto Aristide riceverai<span class="badge badge-points">100 punti</span>, ti regalerà la <span class="badge badge-tm">💿 TM04</span>. Attenzione: il tuo Pokémon avrà il <strong>50% di probabilità di apprenderla</strong>.</p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚.</strong></p>

    <p>Una volta uscito dalla palestra, torna al Centro Pokémon per curarti, quando sei pronto, dirigiti a destra per raggiungere la <strong>Route 9</strong> e continuare il tuo viaggio.</p>
</section>

<section id="cratere">
    <h2>🌋 ROUTE 9 e CRATERE KORAKE</h2>
    <p>Appena arrivato nella Route 9, esplora l'area sulla destra per raccogliere due Poké Ball. Nella parte superiore del percorso noterai un altro pozzo. Al suo interno troverai un uomo pronto a sfidarti in un modo molto particolare.</p>

    <h3>LA SFIDA DEL POZZO (OPZIONALE)</h3>
    <ul>
        <li><strong>Team:</strong> 1 Pokémon il cui livello sarà identico a quello del tuo Pokémon al momento della sfida. Se ha un Pokémon che può <strong>Mega evolversi</strong> lo farà.</li>
        <li><strong>Ricompensa:</strong> Se vincerai, ti regalerà 3 Caramelle Rare (Rare Candy).</li>
    </ul>

    <p>Dopo la sfida torna a Mindra City per curarti. Quando sei pronto, ritorna in Route 9 e sali la scalinata. Dirigiti verso l'apertura nella montagna per entrare nel <strong>Cratere Korake</strong>.

<div class="warning-box"><strong>⚠️ATTENZIONE</strong><br>
 Il Cratere Korake è un <strong>dungeon</strong>. Preparati bene prima di entrare, perché non potrai curarti tra le battaglie fino a quando non avrai trovato l'uscita.</p></div>

    <h3>CRATERE KORAKE</h3>
    <p>Questo dungeon contiene <strong>9 reclute del Team Plasma</strong>, la sfida finale con Acromio e <strong>5 Poké Ball</strong>.</p>
  <ul>
        <li><strong>Prima Recluta</strong>: 2 Pokémon, livello 53.</li>
        <li><strong>Seconda Recluta</strong>: 1 Pokémon, livello 54.</li>
        <li><strong>Terza Recluta</strong>: 1 Pokémon, livello 48.</li>
        <li><strong>Quarta Recluta</strong>: 1 Pokémon, livello 54.</li>
        <li><strong>Quinta recluta (Opzionale)</strong>: 2 Pokémon, livello 47.</li>
        <li><strong>Sesta Recluta</strong>: 1 Pokémon, livello 48.</li>
        <li><strong>Settima Recluta</strong>: 1 Pokémon, livello 54.</li>
        <li><strong>Ottava Recluta</strong>: 2 Pokémon, livello 56.</li>
        <li><strong>Nona Recluta</strong>: 1 Pokémon, livello 54.</li>
    </ul>

    <h4>SFIDA FINALE: ACROMIO</h4>
    <p>Salta sulle rocce per raggiungere la piattaforma centrale. Ad attenderti ci sarà la tua quarta battaglia contro Acromio.</p>

    <p>Nota importante: Come per gli scontri precedenti, se Acromio possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).</p>

    <p>Il suo team è composto da 3 Pokémon, ed inoltre avrà <strong class="badge badge-cure">2 Super Pozioni</strong>:</p>
    <ul>
        <li>Due Pokémon di livello 62.</li>
        <li>Un Pokémon di livello 65.</li>
    </ul>

    <p>Sconfiggilo per ottenere una ricompensa di <strong>10 Megashard</strong>.</p>

    <p>Una volta sconfitto Acromio, per uscire dovrai ripercorrere l'intero dungeon al contrario. Torna nella stanza iniziale dove hai trovato il primo bivio. Questa volta, prendi il sentiero a destra per trovare l'uscita che ti condurrà a <strong>Metra Town</strong>.</p>

    <h4>RICOMPENSA DEL CRATERE KORAKE</h4>
    <ul>
        <li><strong>Completamento normale:</strong><span class="badge badge-points">35 punti</span></li>
        <li><strong>Full Clear (sconfiggendo tutte le reclute):</strong> <span class="badge badge-points">50 punti</span>.</li>
    </ul>
</section>

<section id="elesa">
    <h2>⚡ METRA TOWN (8° PALESTRA)</h2>
    <p>Una volta arrivato a Metra Town, esplora a fondo la città per raccogliere ben <strong>7 Poké Ball</strong> sparse nei vari angoli. Dopo aver recuperato tutti gli oggetti, dirigiti al Centro Pokémon per curarti. È giunto il momento di affrontare l'ottava e ultima Palestra del tuo viaggio.</p>

    <h3>OTTAVA PALESTRA: ELESA</h3>
    <p>L'ultima sfida per completare il tuo viaggio attraverso le Palestre ti attende. Preparati ad affrontare un lungo percorso difeso da ben <strong>10 allenatrici</strong> prima dello scontro con la potente Capopalestra Elesa.</p>

    <div class="warning-box">
        <strong>Nota importante sullo scontro finale:</strong> Nello scontro con Elesa, fai attenzione: se possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante la battaglia).
        <p>Attenzione: Alcuni trainer della palestra avranno delle cure, al momento non siamo a conoscenza di quali, se riuscite a scoprirlo segnalatecelo pure, grazie.</p>
    </div>

    <h4>ALLENATORI DELLA PALESTRA</h4>
    <ul>
        <li><strong>Prima Allenatrice:</strong> 1 Pokémon (livello 60).</li>
        <li><strong>Seconda Allenatrice:</strong> 2 Pokémon (entrambi livello 59).</li>
        <li><strong>Terza Allenatrice:</strong> 1 Pokémon (livello 60).</li>
        <li><strong>Quarta Allenatrice:</strong> 2 Pokémon (entrambi livello 59).</li>
        <li><strong>Quinta Allenatrice:</strong> 2 Pokémon (entrambi livello 59).</li>
        <li><strong>Sesta Allenatrice:</strong> 1 Pokémon (livello 60).</li>
        <li><strong>Settima Allenatrice:</strong> 2 Pokémon (entrambi livello 59). Avrà anche <strong class="badge badge-cure">1 Full Restore</strong>.</li>
        <li><strong>Ottava Allenatrice:</strong> 3 Pokémon (livelli 53, 56, 59).</li>
        <li><strong>Nona Allenatrice:</strong> 1 Pokémon (livello 60). Avrà anche <strong class="badge badge-cure">1 Full Restore</strong>.</li>
        <li><strong>Decima Allenatrice:</strong> 3 Pokémon (livelli 53, 56, 59).</li>
        <li><strong>Elesa (Capopalestra):</strong> 6 Pokémon (quattro di livello 62, uno di livello 63 e l'asso di livello 65). Elesa avrà anche <strong class="badge badge-cure">2 Iper Pozioni</strong>.</li>
    </ul>

    <p>Una volta sconfitta Elesa riceverai <span class="badge badge-points">60 punti</span>, ti regalerà la <span class="badge badge-tm">💿 TM03</span>. Attenzione: il tuo Pokémon avrà il <strong>50% di probabilità di apprenderla</strong>.</p>
    <p>Avrai inoltre il <strong>20% di possibilità di droppare 1 uovo 🥚.</strong></p>

    <p>Terminata la battaglia, cura la tua squadra dall'infermiera. Dirigiti quindi al molo sulla destra e parla con il marinaio vicino al traghetto. Ti offrirà due destinazioni:</p>
    <ul>
        <li><strong>Tornare a Route 1:</strong> Questa è l'ultima opportunità di usare la Stash nella città iniziale. Non preoccuparti, potrai poi parlare con il marinaio a Route 1 per ritornare qui.</li>
        <li><strong>Proseguire verso la sfida finale:</strong> Questa è la via per raggiungere la destinazione conclusiva della tua avventura.</li>
    </ul>
</section>

<section id="cammino">
    <h2>🛤️ KUOKOA ISLE e CAMMINO DELL'EROE</h2>
    <p>Il traghetto ti condurrà su un'isola di passaggio, l'ultima tappa del tuo viaggio. Dirigiti verso la parte superiore dell'isola: lì troverai l'ingresso per l'ultimo dungeon del gioco, il <strong>Cammino dell'Eroe</strong>.</p>

    <h3>CAMMINO DELL'EROE (VIA VITTORIA)</h3>
    <p>Il Cammino dell'Eroe è l'ultimo sforzo prima della Lega Pokémon. All'interno troverai <strong>16 allenatori</strong> (Opzionali) e <strong>6 Poké Ball</strong>.</p>

   <div class="warning-box">
 <h4>STRATEGIA CONSIGLIATA: SOPRAVVIVERE PER ANDARE ALLA LEGA</h4>
    <p>Il percorso che segue è pensato per raggiungere l'uscita recuperando tutte le Poké Ball con il minimo numero di scontri (3 in totale). I più temerari possono ovviamente affrontare tutti gli avversari per guadagnare esperienza extra.</p> </div>


    <h4>IL PERCORSO OTTIMALE</h4>
    <ol>
        <li>Appena entrato, prosegui dritto saltando i primi 4 allenatori.</li>
        <li>Al primo bivio, vai a <strong>sinistra</strong>.</li>
        <li>Continua saltando i successivi 5 allenatori.</li>
        <li>Affronta l'<strong>Allenatrice bionda</strong> che blocca il passaggio per le Poké Ball. <strong>Team:</strong> 1 Pokémon (livello 68).</li>
        <li>Prosegui verso l'alto e, al bivio successivo, vai a <strong>destra</strong>.</li>
        <li>Qui dovrai affrontare due allenatori per sbloccare 4 Poké Ball:
            <ul>
                <li><strong>Primo Allenatore:</strong> 3 Pokémon (tutti livello 63). Avrà anche <strong class="badge badge-cure">1 Full Restore</strong>.</li>
                <li><strong>Secondo Allenatore:</strong> 2 Pokémon (entrambi livello 65). Avrà anche <strong class="badge badge-cure">1 Full Restore</strong>.</li>
            </ul>
        </li>
        <li>Una volta raccolto tutto, prosegui verso l'alto e prendi l'uscita sulla <strong>sinistra</strong>.</li>
    </ol>

    <h4>RICOMPENSA DEL CAMMINO DELL'EROE</h4>
    <ul>
        <li><strong>Completamento normale:</strong> <span class="badge badge-points">30 punti</span></li>
        <li><strong>Full Clear (sconfiggendo tutti gli allenatori):</strong><span class="badge badge-points">100 punti</span></li>
    </ul>
</section>

<section id="lega">
    <h2>👑 PURPURA PLATEAU e LEGA POKÉMON</h2>
    <p>Una volta uscito dal dungeon, ce l'hai fatta. Sei finalmente arrivato alla <strong>Lega Pokémon</strong>. Lungo il percorso che conduce all'ingresso, raccogli le <strong>6 Poké Ball finali</strong>. Quando sei pronto ad affrontare la prova conclusiva, varca la grande porta del Palazzo. All'interno troverai delle <strong>infermiere</strong>. Parla con loro per curarti e usa questo momento per gli ultimi preparativi!</p>

    <div class="danger-box">
        <strong>⚠️ Punti Chiave degli Scontri</strong>
        <ul>
            <li><strong>Megaevoluzione:</strong> Se un Superquattro possiede un Pokémon in grado di megaevolversi, lo farà (una sola volta durante lo scontro).</li>
            <li><strong>Full Restore:</strong> Hanno a disposizione <strong class="badge badge-cure">2 Full Restore</strong> e non esiteranno a usarle per curare completamente i suoi Pokémon in difficoltà. <li>Il Campione avrà invece <strong class="badge badge-cure">4 Full Restore</strong></li></li>
        </ul>
    </div>

    <h3>Accesso ai Superquattro</h3>
    <p>Troverai <strong>Iris</strong> ad attenderti nella sala centrale. Interagisci con lei per farla spostare e aprire così la via verso la prima sfida della Lega. Dopo ogni vittoria, dovrai tornare in questa stanza e parlare con il personaggio successivo per sbloccare la prossima battaglia.</p>

    <h3 id="nardo">NARDO - Primo Superquattro</h3>
    <p>La prima porta ti conduce da <strong>Nardo</strong>. Preparati a uno scontro impegnativo.</p>
    <div class="team-card">
        <h4>Team di Nardo (6 Pokémon)</h4>
        <ul>
            <li>Due Pokémon di <span class="badge badge-level">livello 77</span></li>
            <li>Due Pokémon di <span class="badge badge-level">livello 78</span></li>
            <li>Due Pokémon di <span class="badge badge-level">livello 81</span></li>
            <li>Avrà <strong class="badge badge-cure">2 Full Restore</strong></li>
        </ul>
    </div>
    <p>Battendo Nardo riceverete <span class="badge badge-points">80 punti</span> e <strong>10 Megashard</strong>.</p>
    <p><em>Una volta sconfitto Nardo, torna nella stanza precedente e parla con il <strong>secondo personaggio</strong> per sbloccare l'accesso alla seconda sfida.</em></p>

    <h3 id="blu">BLU - Secondo Superquattro</h3>
    <p>La seconda porta ti conduce da <strong>Blu</strong>, un altro avversario di altissimo livello.</p>
    <div class="team-card">
        <h4>Team di Blu (6 Pokémon)</h4>
        <ul>
            <li>Due Pokémon di <span class="badge badge-level">livello 77</span></li>
            <li>Due Pokémon di <span class="badge badge-level">livello 80</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 81</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 84</span></li>
            <li>Avrà <strong class="badge badge-cure">2 Full Restore</strong></li>
        </ul>
    </div>
    <p>Battendo Blu riceverete <span class="badge badge-points">90 punti</span> e <strong>10 Megashard</strong>.</p>
    <p><em>Una volta sconfitto Blu, torna nella stanza precedente e parla con il <strong>terzo personaggio sulla sinistra</strong>, saltando quello centrale, per sbloccare la terza sfida.</em></p>

    <h3 id="lance">LANCE - Terzo Superquattro</h3>
    <p>La terza porta ti conduce da <strong>Lance</strong>, un altro avversario di altissimo livello.</p>
    <div class="team-card">
        <h4>Team di Lance (6 Pokémon)</h4>
        <ul>
            <li>Due Pokémon di <span class="badge badge-level">livello 80</span></li>
            <li>Due Pokémon di <span class="badge badge-level">livello 81</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 84</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 87</span></li>
	        <li>Avrà <strong class="badge badge-cure">2 Full Restore</strong></li>
        </ul>
    </div>
    <p>Battendo Lance riceverete <span class="badge badge-points">100 punti</span> e <strong>10 Megashard</strong>.</p>
    <p><em>Una volta sconfitto Lance, torna nella stanza precedente e parla con il <strong>quarto personaggio nell'angolo a sinistra</strong> per sbloccare la quarta sfida.</em></p>

    <h3 id="camilla">CAMILLA - Quarto Superquattro</h3>
    <p>La quarta porta ti conduce da <strong>Camilla</strong>, l'ultimo ostacolo prima del Campione!</p>
    <div class="team-card">
        <h4>Team di Camilla (6 Pokémon)</h4>
        <ul>
            <li>Tre Pokémon di <span class="badge badge-level">livello 81</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 84</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 87</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 90</span></li>
            <li>Avrà <strong class="badge badge-cure">2 Full Restore</strong></li>
        </ul>
    </div>
    <p>Battendo Camilla riceverete <span class="badge badge-points">110 punti</span> e <strong>10 Megashard</strong>.</p>
    <p><em>Una volta sconfitta Camilla, torna nella stanza precedente e adesso parla con il <strong>personaggio al centro</strong>. Potrai finalmente affrontare il Campione della Lega Pokémon!</em></p>

    <h3 id="rosso">ROSSO - Campione della Lega Pokémon</h3>
    <p>Il campione della Lega è <strong>Rosso</strong>. Questa è la battaglia finale e la più difficile di tutto il gioco!</p>
    <div class="team-card">
        <h4>Team di Rosso (6 Pokémon)</h4>
        <ul>
            <li>Tre Pokémon di <span class="badge badge-level">livello 89</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 86</span></li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 95</span> (Il Pokémon più forte del gioco!)</li>
            <li>Uno Pokémon di <span class="badge badge-level">livello 92</span></li>
            <li>Avrà <strong class="badge badge-cure">4 Full Restore</strong></li>
        </ul>
    </div>
    
    <p>Battendo Rosso riceverete <span class="badge badge-points">300 punti</span> e <strong>10 Megashard</strong>.</p>

    <div class="success-box">
        <h3>🏆 CONGRATULAZIONI! 🏆</h3>
        <p><strong>Una volta sconfitto Rosso, sarai il nuovo CAMPIONE DELLA LEGA POKÉMON!</strong></p>
        <p>Hai completato il gioco e dimostrato di essere il miglior allenatore della regione!</p>
    </div>
</section>

<section id="recap">
    <h2>📊 RECAP PUNTEGGI</h2>
    <table>
        <thead>
            <tr>
                <th>Evento</th>
                <th>Punti Base</th>
                <th>Full Clear</th>
                <th>Altre Ricompense</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>Laboratorio (Lab)</td><td>+5</td><td>-</td><td>-</td></tr>
            <tr><td>Ponte</td><td>+10</td><td>-</td><td>-</td></tr>
            <tr><td>Foresta Ukani</td><td>+15</td><td>+25</td><td>-</td></tr>
            <tr><td>Iris (1° Palestra)</td><td>+70</td><td>-</td><td>TM39</td></tr>
            <tr><td>World Boss (Fase 1)</td><td>+10</td><td>-</td><td>10 Megashard (20 durante Mega Week)</td></tr>
            <tr><td>Tunnel Poaka</td><td>+20</td><td>+25</td><td>-</td></tr>
            <tr><td>Chicco (2° Palestra)</td><td>+35</td><td>-</td><td>TM08</td></tr>
            <tr><td>Acromio (Grotta Niuna)</td><td>+10</td><td>-</td><td>10 Megashard (20 durante Mega Week)</td></tr>
            <tr><td>Miniere Gemora</td><td>+20</td><td>+25</td><td>-</td></tr>
            <tr><td>Artemisio (3° Palestra)</td><td>+35</td><td>-</td><td>TM34</td></tr>
            <tr><td>Rovine Ka'aka</td><td>+15</td><td>+25</td><td>-</td></tr>
            <tr><td>Selva Laloa</td><td>+10</td><td>+20</td><td>-</td></tr>
            <tr><td>Cascate Tuhala</td><td>+30</td><td>+50</td><td>10 Megashard</td></tr>
            <tr><td>Shountal (4° Palestra)</td><td>+20</td><td>-</td><td>TM50</td></tr>
            <tr><td>Dune Merakai</td><td>+30</td><td>+40</td><td>-</td></tr>
            <tr><td>Lenora (5° Palestra)</td><td>+40</td><td>-</td><td>TM42</td></tr>
            <tr><td>Rivale (N)</td><td>+5</td><td>-</td><td>-</td></tr>
            <tr><td>Treno</td><td>+5</td><td>+15</td><td>-</td></tr>
            <tr><td>Rafan (6° Palestra)</td><td>+20</td><td>-</td><td>TM40</td></tr>
            <tr><td>Monte Orokai</td><td>-</td><td>+10</td><td>-</td></tr>
            <tr><td>Plasma Underground</td><td>+25</td><td>+35</td><td>-</td></tr>
            <tr><td>Torre Plasma Superiore</td><td>+15</td><td>+30</td><td>-</td></tr>
            <tr><td>Aristide (7° Palestra)</td><td>+100</td><td>-</td><td>TM04</td></tr>
            <tr><td>Cratere Korake</td><td>+20</td><td>+35</td><td>10 Megashard</td></tr>
            <tr><td>Elesa (8° Palestra)</td><td>+60</td><td>-</td><td>TM03</td></tr>
            <tr><td>Cammino dell'Eroe</td><td>+30</td><td>+100</td><td>-</td></tr>
            <tr><td>Nardo (Superquattro)</td><td>+80</td><td>-</td><td>10 Megashard</td></tr>
            <tr><td>Blu (Superquattro)</td><td>+90</td><td>-</td><td>10 Megashard</td></tr>
            <tr><td>Lance (Superquattro)</td><td>+100</td><td>-</td><td>10 Megashard</td></tr>
            <tr><td>Camilla (Superquattro)</td><td>+110</td><td>-</td><td>10 Megashard</td></tr>
            <tr><td>Rosso (Campione)</td><td>+300</td><td>-</td><td>10 Megashard</td></tr>
        </tbody>
    </table>
</section>

<section id="uova">
<h2> 🥚LISTA DELLE UOVA SPECIALI</h2>
    <p>Elenco delle uova speciali presentate:</p>
    <ul>
        <li>SPIN EGG: <a href="https://afanelli.github.io/spin_egg/">[calcola il precedente]</a></li>
        <li>CHEST EGG: <a href="https://imgur.com/a/4BgrpYY">[pool]</a>. Porta Gimmighoul (+30 Punti, +15 monete) o Gholdengo (+60 Punti, +30 monete) dal cartolaio sulla Route 1 per riscattare il premio.</li>
        <li>MEGA EGG: <a href="https://imgur.com/a/rdwDXGL">[pool]</a>. Grazie a questo uovo potrete ottenere al 100% un Pokémon in grado di Megaevolversi. <a href="#pietre">Costi Megapietre</a>.</li>
        <li>...</li>
    </ul>
</section>

<section id="pozzi">
    <h2>🪣 ELENCO DEI POZZI</h2>
    <ul>
        <li><strong>FORESTA UKANI:</strong> Cambio natura</li>
        <li><strong>ROUTE 3 (POST 1° PALE):</strong> Cambio mossa</li>
        <li><strong>GEMORA CITY (PRE 3° PALE):</strong> Cambio abilità</li>
        <li><strong>ROUTE 7 (POST 6° PALE):</strong> Battendo 6 Pokémon 10 livelli sotto, riceverai in cambio di 3 item</li>
        <li><strong>ROUTE 9 (POST 7° PALE):</strong> Battendo 1 Pokémon al tuo livello, riceverai 3 candy</li>
    </ul>
</section>

<section id="mt">
    <h2>💿 LISTA MT CAPIPALESTRA</h2>
    <ul>
        <li><strong>IRIS:</strong> TM39</li>
        <li><strong>CHICCO:</strong> TM08</li>
        <li><strong>ARTEMISIO:</strong> TM34</li>
        <li><strong>SHOUNTAL:</strong> TM50</li>
        <li><strong>LENORA:</strong> TM42</li>
        <li><strong>RAFAN:</strong> TM40</li>
        <li><strong>ARISTIDE:</strong> TM04</li>
        <li><strong>ELESA:</strong> TM03</li>
    </ul>
</section>

<section id="eventi">
<h2> 💣LISTA DEGLI EVENTI</h2>
    <p>Elenco degli eventi in game:</p>
    <ul>
        <li>🎃 SPOOKY WEEK (29/10 - 5/11): <a href="https://imgur.com/a/soKAKjs/">[sconti pietre]</a> Cerca i Pikachu travestiti da Mimikyu e scegli "Dolcetto o Scherzetto". Vendi le caramelle al nuovo NPC in Route 1 per ottenere Candy Points e aiutare a sbloccare +1 Spazio Stash per tutti!</li>
        <li>💥 MEGA WEEK (04/11 - 11/11): World Boss e Acromio nel monte Niuna avranno il drop doppio di shard da 10 a 20. Nello shop ci sarà il Mega Pack </li>
        <li>...</li>
    </ul>
</section>

<section id="errori">
<h2> ⛔LISTA DEGLI ERRORI</h2>
    <p>Elenco dei possibili errori:</p>
    <ul>
        <li>404: La pagina non esiste o è stata spostata.</li>
        <li>599: Per motivi di sicurezza il sito al momento non accetta connessioni dall'estero. Puoi usare una VPN.</li>
        <li>403: Pulisci i <a href="https://www.twitch.tv/alepre98/clip/PleasantKindMouseKappa-CetcfebMIqk5ehYp" target="_blank">cookie</a> del sito e riprova. Se non funziona prova a cambiare browser o riavviare il router.</li>
        <li>500: Verifica la tua mail di Twitch.</li>
        <li>419: Sono state apportate modifiche al sito. Aggiorna la pagina.</li>
        <li>300158: Segui in ordine i seguenti passaggi: Tasto emergenza, chiudi il browser, riapri tutto, fai la login, carica la rom, fai la patch.</li>
    </ul>
</section>

<section id="punteggitorre">
    <h2>🗼 RICOMPENSE TORRE LOTTA PER PIANO</h2>
    <p>Di seguito la tabella con tutte le ricompense ottenibili piano per piano nella Torre Lotta:</p>

    <table>
        <thead>
            <tr>
                <th>Piano</th>
                <th>Punti</th>
                <th>Item</th>
                <th>Uovo</th>
                <th>Shard</th>
                <th>Pack</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>5</td>
                <td>Pozione</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>2</td>
                <td>5</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>3</td>
                <td>5</td>
                <td>-</td>
                <td>Uovo T1</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5</td>
                <td>-</td>
                <td>-</td>
                <td>5</td>
                <td>-</td>
            </tr>
            <tr>
                <td>5</td>
                <td>10</td>
                <td>Full Heal</td>
                <td>Uovo Speciale della Settimana</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>6</td>
                <td>10</td>
                <td>-</td>
                <td>Uovo T1</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>7</td>
                <td>10</td>
                <td>PP-Up</td>
                <td>-</td>
                <td>10</td>
                <td>-</td>
            </tr>
            <tr>
                <td>8</td>
                <td>10</td>
                <td>-</td>
                <td>Uovo T2</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>9</td>
                <td>10</td>
                <td>-</td>
                <td>Uovo T2</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>10</td>
                <td>20</td>
                <td>Soda Pop</td>
                <td>-</td>
                <td>10</td>
                <td>Pack Back</td>
            </tr>
            <tr>
                <td>11</td>
                <td>20</td>
                <td>-</td>
                <td>Uovo T3</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>12</td>
                <td>20</td>
                <td>PP-Max</td>
                <td>Uovo T2</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>13</td>
                <td>20</td>
                <td>Enigma</td>
                <td>-</td>
                <td>5</td>
                <td>-</td>
            </tr>
            <tr>
                <td>14</td>
                <td>20</td>
                <td>Lemonade</td>
                <td>Uovo Speciale della Settimana</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>15</td>
                <td>40</td>
                <td>MT</td>
                <td>-</td>
                <td>15</td>
                <td>Pack MT</td>
            </tr>
            <tr>
                <td>16</td>
                <td>40</td>
                <td>Citrus</td>
                <td>Uovo Speciale</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>17</td>
                <td>40</td>
                <td>Lum</td>
                <td>-</td>
                <td>15</td>
                <td>-</td>
            </tr>
            <tr>
                <td>18</td>
                <td>40</td>
                <td>Moomoo</td>
                <td>Uovo Speciale</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>19</td>
                <td>40</td>
                <td>X-SpA</td>
                <td>-</td>
                <td>20</td>
                <td>-</td>
            </tr>
            <tr>
                <td>20</td>
                <td>80</td>
                <td>X-Atk</td>
                <td>Uovo Speciale</td>
                <td>-</td>
                <td>Pack Focus</td>
            </tr>
            <tr>
                <td>21</td>
                <td>80</td>
                <td>Elisir Max</td>
                <td>Uovo T3</td>
                <td>20</td>
                <td>-</td>
            </tr>
            <tr>
                <td>22</td>
                <td>80</td>
                <td>Max Potion</td>
                <td>Uovo Speciale</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>23</td>
                <td>80</td>
                <td>Candy</td>
                <td>Uovo T3</td>
                <td>30</td>
                <td>-</td>
            </tr>
            <tr>
                <td>24</td>
                <td>120</td>
                <td>Max Pozza</td>
                <td>Uovo Speciale</td>
                <td>40</td>
                <td>-</td>
            </tr>
            <tr>
                <td>25</td>
                <td>160</td>
                <td>Full Restore</td>
                <td>Uovo Speciale</td>
                <td>50</td>
                <td>Pack Torre Esclusivo</td>
            </tr>
        </tbody>
    </table>
</section>

<section id="pietre">
    <h2>🪨 COSTI MEGAPIETRE</h2>
    <p>Di seguito la tabella con i costi di tutte le megapietre disponibili:</p>

    <table>
        <thead>
            <tr>
                <th>Megapietra</th>
                <th>Costo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Sablenite</td>
                <td>60</td>
            </tr>
            <tr>
                <td>Mawilite</td>
                <td>60</td>
            </tr>
            <tr>
                <td>Beedrillite</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Pinsirite</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Heracronite</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Medichamite</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Cameruptite</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Abomasite</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Alakazite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Scizorite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Tyranitarite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Sceptilite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Sharpedonite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Glalitite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Lopunnite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Audinite</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Charizardite Y</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Pidgeotite</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Kangaskhanite</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Aerodactylite</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Swampertite</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Manectite</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Banettite</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Absolite</td>
                <td>110</td>
            </tr>
            <tr>
                <td>Venusaurite</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Blastoisinite</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Slowbronite</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Gengarite</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Gyaradosite</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Gardevoirite</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Galladite</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Charizardite X</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Ampharosite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Steelixite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Houndoominite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Blazikenite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Aggronite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Altarianite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Salamencite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Latiosite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Latiasite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Garchompite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Lucarionite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Diancite</td>
                <td>150</td>
            </tr>
            <tr>
                <td>Mewtwoite X</td>
                <td>170</td>
            </tr>
            <tr>
                <td>Mewtwoite Y</td>
                <td>170</td>
            </tr>
            <tr>
                <td>Metagrossite</td>
                <td>170</td>
            </tr>
        </tbody>
    </table>
</section>

`;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mainContent').innerHTML = content;
});
