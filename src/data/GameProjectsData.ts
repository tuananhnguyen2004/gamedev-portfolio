import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "CatDogWar", "img/projects/CatDogWar.gif", 
    `
    <div class="paragraph">
     <strong>CatDogWar</strong> is an adaptation of the classic Battleship game with a cat-and-dog theme
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/tWI-hsuhT40" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="notice">
        Source code are available on <a href="https://github.com/tuananhnguyen2004/CatDogWar" target="_blank">Github</a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Drag, drop, rotate cats/dogs on a 7x9 grid</li>
        <li>Smooth animations using DOTween</li>
        <li>Each player will take turn to choose a grid cell to attack without knowing the position of opponent's cats/dogs</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/CatDogWar_MainMenu.png" alt="Main Menu" />
        <img class="phone-screenshot" src="img/projects/CatDogWar_Setup.png" alt="Game Setup" />
        <img class="phone-screenshot" src="img/projects/CatDogWar_Attack.png" alt="Dog Attack" />
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Magnetzom", "img/projects/Magnetzom.gif", `
    <div class="paragraph">
        <strong>Magnetzom</strong> is a 2D top-down shooter where players must escape a zombie-infested lab using a unique magnet gun that pulls in nearby objects to launch them as deadly projectiles.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/rnYumE-AjnY" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Players use magnetgun to attract object and shoot it as projectiles to kill zombies.</li>
        <li>Simple zombies AI that chase player within its detected range. Otherwise, it will patrol.</li>
        <li>I began implementing Observer Pattern using Scriptable Objects for managing game events</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/tuananhnguyen2004/Magnetzom" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Magnetzom_Begin.png" alt="Game Begin" />
    <img class="pc-screenshot" src="img/projects/Magnetzom_Attack.png" alt="Player Attack" />
    <img class="pc-screenshot" src="img/projects/Magnetzom_Attack1.png" alt="Player Attack" />
    <img class="pc-screenshot" src="img/projects/Magnetzom_TurnOn.png" alt="Player Turn On machine" />
    </div>
    `, "#5a78af", false, true),
    new ProjectData("project-3", "JetGuy", "img/projects/JetGuy.gif", `
    <div class="paragraph">
        <strong>JetGuy</strong> is a clone version of Mars:Mars. This game is the first game I developed using Unity as the final project of a Unity course organized at my university's game development club.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/NEhiNeDLdw4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Touch left/right part of the phone screen to fly in backward/foward direction.</li>
        <li>Players must make strategic decisions, as rocket fuel is limited and misjudging a landing could result in falling from a fatal height or ending up in the wrong location.</li>
        <li>The game currently features 3 levels, each progressively more challenging than the last.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code is available on <a href="https://github.com/tuananhnguyen2004/jet-guy" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/JetGuy_5.png" alt="Level Selection" />
        <img class="pc-screenshot" src="img/projects/JetGuy_4.png" alt="Main Menu" />
        <img class="pc-screenshot" src="img/projects/JetGuy_3.png" alt="Game Over" />
        <img class="pc-screenshot" src="img/projects/JetGuy_2.png" alt="Gameplay 1" />
        <img class="pc-screenshot" src="img/projects/JetGuy_1.png" alt="Gameplay 2" />
    </div>
    `, "#383838", false, true)
    // new ProjectData("project-4", "Eugeneable", "img/projects/project-4-icon.png", `
    // <div class="paragraph">
    // <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    // <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    // </div>
    
    // <div class="paragraph">
    //     Main features :
    //     <ul>
    //     <li>Some stuff</li>
    //     <li>Some great stuff</li>
    //     <li>More awesome stuff</li>
    //     <li>And then some</li>
    //     </ul>
    // </div>

    // <div class="paragraph">
    //     <div class="notice">
    //     Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
    //     </div>
    // </div>

    // <div class="paragraph center">
    //     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    //     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    // </div>
    // `, "#e80fb7"),
    // new ProjectData("project-5", "Cloud Drew Land", "img/projects/project-5-icon.png", `
    // <div class="paragraph">
    //     <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    //     <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    // </div>
    
    // <div class="paragraph">
    //     Main features :
    //     <ul>
    //     <li>Some stuff</li>
    //     <li>Some great stuff</li>
    //     <li>More awesome stuff</li>
    //     <li>And then some</li>
    //     </ul>
    // </div>

    // <div class="paragraph">
    //     <div class="notice">
    //     Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
    //     Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    //     </div>
    // </div>

    // <div class="paragraph center">
    //     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    //     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    //     <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    // </div>`, "#e48246")
];