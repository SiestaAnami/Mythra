document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    const elementsContent = `
        <h2>Elements</h2>
        <ul>
            <li><img src="logos/Wind.png" alt="Wind" style="width: 20px; vertical-align: middle;"> Wind - inflict poison effect for 10 seconds</li>
            <li><img src="logos/Physical.png" alt="Physical" style="width: 20px; vertical-align: middle;"> Physical - inflict wither effect for 5 seconds</li>
            <li><img src="logos/Lightning.png" alt="Lightning" style="width: 20px; vertical-align: middle;"> Lightning - inflict lightning damage that has a chance to affect nearby entities</li>
            <li><img src="logos/Ice.png" alt="Ice" style="width: 20px; vertical-align: middle;"> Ice - inflict slowness for 30 seconds</li>
            <li><img src="logos/Fire.png" alt="Fire" style="width: 20px; vertical-align: middle;"> Fire - inflict burn</li>
            <li><img src="logos/Imaginary.png" alt="Imaginary" style="width: 20px; vertical-align: middle;"> Imaginary - inflict imprisonment for 3 seconds & slowness for 10 seconds</li>
            <li><img src="logos/Quantum.png" alt="Quantum" style="width: 20px; vertical-align: middle;"> Quantum - ignore any kind of defense/resistance</li>
        </ul>
    `;

    const originsContent = `
        <h2>Origins</h2>
        <p><strong>Demon Lord</strong><br>
        Talent: Each time user takes damage, gain 1 stack of "Order" up to 20 stacks. Once reaching maximum stacks, summon a Fallen Angel with the same health as yours. If there's still one Fallen Angel alive when stacks are max, kill one Fallen Angel. At the same time, heal the user's HP to maximum.<br>
        Weapon: Venuzdonoa</p>
        <p><strong>Fallen Trailblazer</strong><br>
        Talent: When this user gets hurt, gain 1 stack of Syzygy up to 4. When stacks reach maximum, consume 3 and summon Monoliths to every nearby mob that deals massive damage & wither effect. At the same time, gain "Aegis" and regeneration for 5 seconds.<br>
        Weapon: Dark Blade</p>
    `;

    const pathsContent = `
        <h2>Paths/Faction</h2>
        <p><strong>Interastral Peace Corporation (IPC)</strong><br>
        Pathstrider: This faction gives a shield to the pathstrider every 5 seconds. Every 2 minutes, the pathstrider receives 1 netherite ingot.<br>
        <strong>Stoneheart:</strong><br>
        (Adventurine Stone) When this Stoneheart user gets hurt, gain 1 stack of Adventurine. When Adventurine stacks reach 7, gain Shield & Resistance. At the same time, deal Imaginary Damage to every nearby entity and gain 7 netherite ingots.<br>
        (Topaz Stone) Summon Numby (Five Tailed Fox) that follows the path of Preservation. When Numby or the user gets hurt, gain 1 stack of Debt up to 5 stacks. Upon reaching 5 stacks, enter the state of "Debt Collector" and increase strength & resistance 5x for 10 seconds.</p>
        <p><strong>Arbitrators</strong><br>
        Pathstrider: When this pathstrider gets hurt, gain 1 stack of Dreamdiver up to 20. Upon reaching max stacks, activate 1 random Myth Sword Ultimate. At the same time, gain 1 Aegis & regeneration for 10 seconds. If this pathstrider dies, enter the state of "Torrid Scorch". In this state, gain strength, speed, night vision, and fire resistance. Inflict slowness on nearby entities and continuously summon meteors until death. In "Torrid Scorch" state, take 2 damage every 2 seconds. When this pathstrider dies while in "Torrid Scorch" state, activate Flame Arrow and exit the state.</p>
        <p><strong>Nameless</strong><br>
        Pathstrider: When close to Astral Express, gain Regeneration, Resistance, Strength, and Fire Resistance. When this pathstrider gets hurt while near the Astral Express, deal Quantum damage to nearby entities.</p>
        <p><strong>Sanctus Medicus</strong><br>
        Pathstrider: When this pathstrider takes damage, gain 1 stack of Abyss Flower up to 7. Upon reaching max stacks, set 1 Totem of Undying in the off-hand. This pathstrider has infinite regeneration level 3.</p>
    `;

    const newsContent = `
        <h2>News</h2>
        <nav class="news-buttons">
            <button id="newOperatorButton">New Operator</button>
            <button id="newCompanionButton">New Companion</button>
            <button id="newPathButton">New Path Remembrance</button>
            <button id="newFactionButton">New Faction</button>
            <button id="newBossButton">New Boss</button>
        </nav>
        <section id="newsDetails">
            <!-- News details will be dynamically updated here -->
        </section>
    `;

    const newsDetails = {
        newOperatorButton: `<p><strong>New Operator:</strong><br>Blaze - When this Operator sustains damage, increase strength by 4x.</p>`,
        newCompanionButton: `<p><strong>New Companion:</strong><br>Seele - Deals Quantum damage to a random Hostile mob nearby.</p>`,
        newPathButton: `<p><strong>New Path Remembrance:</strong><br>Memokeeper - When gets fatal damage, enter Astral mode for a brief second.</p>`,
        newFactionButton: `<p><strong>New Faction:</strong><br>Architect - When this user gets damage, gain 1 stack of MagmaWill up to 8 stacks. When reaching max and sneaking, emit a nuclear fire damage to nearby enemies and gain Absorption.</p>`,
        newBossButton: `<p><strong>New Boss:</strong><br>Stellaron Hunter Blade - When this user gets damage, gain 1 stack of Shuhu's Gift up to 5 stacks. When reaching max stacks, restore its HP, and simultaneously deal massive damage to nearby enemies. When Blade dies, activate Shuhu's Curse to restore HP to 100%.</p>`
    };

    document.getElementById("elementsButton").addEventListener("click", () => {
        content.innerHTML = elementsContent;
        content.style.display = "block";
    });

    document.getElementById("originsButton").addEventListener("click", () => {
        content.innerHTML = originsContent;
        content.style.display = "block";
    });

    document.getElementById("pathsButton").addEventListener("click", () => {
        content.innerHTML = pathsContent;
        content.style.display = "block";
    });

    document.getElementById("newsButton").addEventListener("click", () => {
        content.innerHTML = newsContent;
        content.style.display = "block";

        // Add event listeners for news sub-buttons
        Object.keys(newsDetails).forEach(buttonId => {
            document.getElementById(buttonId).addEventListener("click", () => {
                const newsDetailsSection = document.getElementById("newsDetails");
                newsDetailsSection.innerHTML = newsDetails[buttonId];
            });
        });
    });
});
