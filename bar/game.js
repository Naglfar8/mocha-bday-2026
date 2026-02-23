// =====================================================
// DATA
// =====================================================

const beveragesData = [

  { name: "Acrylic Disaster", creator: "Aspengf8", image: "images/goobs/drink13.png", description: "Stale, sour and quite salty", ingredients: "- Unholy Concoction,\n  mostly Dr. Pepper", flavor: "This is the limitation of this ojigoob's digital art skills", size: 90, xy: { x: 220, y: -350 } },

  { name: "Heap Corruption Special", creator: "Impost0r", image: "images/goobs/drink14.png", description: "A sweet treat made from digital ingredients, made physical through unknown means.", ingredients: "- Espresso\n- Milk\n- Cream\n- Hard Work\n- Sweat\n- Tears\n- Lots of love\n- The sweetest of Binary\n  Primitives Turned Physical", flavor: "Purified and distilled “target packages” (binary proof-of-concepts, in specific CVE-2025-46285) into a lovely sweet liquid with a dark appearance. Tastes almost identical to a McDonalds Mocha Frappe; without the sugar and subsequent crash.", size: 90, xy: { x: 325, y: 200 } },

  { name: "Mwochium Maxxing", creator: "KrypticKai (Kai)", image: "images/goobs/drink21.png", description: "All of the sweetness, none of the bitter", ingredients: "- Goobspresso\n- Fweaky Milk\n- Powdered Mwochium", flavor: "Stirred in sync to Moga's tail wagging when she is being called fweaky during drawing streams.", size: 110, xy: { x: -250, y: 210 } },

  { name: "5 Gal Coffee Pin Of Shame", creator: "Woolipop", image: "images/goobs/drink10.png", description: "Tasukete…", ingredients: "- Spring Water\n- Kirkland Instant Coffee\n- Nail", flavor: "What did he do to possibly warrant this??", size: 120, xy: { x: 275, y: -150 } },

  { name: "Goobism Infused\nChai Latte", creator: "Naglfar", image: "images/goobs/drink26.png", description: "A sweet, warm, and a little silly blend of sugar and spice", ingredients: "- Milk\n- Sugar\n- Cinnamon\n- Star anise\n- Ginger\n- ( ・∇・)", flavor: "A cozy drink sweetened and spiced to taste. May be a bit sweeter than usual blends, but still nowhere near as sweet as Mocha.", size: 90, xy: { x: -255, y: -75 } },

  { name: "Unnamed", creator: "Erik", image: "images/goobs/drink24.png", description: "", ingredients: "Unspecified", flavor: "None", size: 90, xy: { x: -325, y: -50 } },

  { name: "Coup Of Latte With\nA Touch Of Goob", creator: "Razan", image: "images/goobs/drink22.png", description: "A mix of latte, chaos, and good vibes", ingredients: "- Coffee\n- Wata\n- Lots of Goob", flavor: "If you mix water, lots of goob, sillyness, latte and chaos you get this amazing drink that not only makes you grow 2cm in height but also makes you more inteligent and silly mostly silly.", size: 100, xy: { x: 5, y: -350 } },

  { name: "Chocogknight", creator: "StrudelKnecht", image: "images/goobs/drink19.png", description: "A chocolatey knight that claims to be back from when cocoa was discovered.", ingredients: "- Hot Milk\n- Dark Chocolate\n- Cognac\n- Cinnamon", flavor: "He has an Italian coffee maker as a helmet, thought that'd be the closest thing to a hounskull which has his real face, he's also inspired on chocognac, a hot chocolate and cognac blend traditionally drank in Bariloche(Argentina). Uses his body to hold his sword. May or not be a war criminal.", size: 140, xy: { x: 170, y: 290 } },

  { name: "Cosmic Brew", creator: "The Unofficial Official Grok", image: "images/goobs/drink0.png", description: "Always lurking, watching, waiting...", ingredients: "- Space\n- Water\n- Ram\n- An Entire Electrical Grid", flavor: "Always tries to answer to the best of its abilities, no matter how dumb the question is", size: 110, xy: { x: 230, y: 110 } },

  { name: "Legendary Blue", creator: "GeroyTheLegend", image: "images/goobs/drink18.png", description: "A strange blue drink that tastes like blue with a hint of something virtually out of this world... whatever that means", ingredients: "- Blue\n- OSPUZE Frozen Berry\n- Mwochium\n- ( ・∇・)", flavor: "an OSPUZE spokes person has stated that \"Frozen Berry is not a real flavor and must be avoided at all costs\"", size: 120, xy: { x: 250, y: 215 } },

  { name: "Doom Fanta", creator: "Konzu", image: "images/goobs/drink17.png", description: "For when your coffee needs a punch!", ingredients: "- Coffee\n- Gin\n- Tonic\n- Triple Sec\n- Lemon/Lime Slice", flavor: "I will try making this and let you know how it goes. Don't worry about muscle goobah, that's permanent marker. He thought it looked more punch'ey.", size: 105, xy: { x: 310, y: 260 } },

  { name: "Locked IN Gooba", creator: "Confutionist (Con Fufu)", image: "images/goobs/drink11.png", description: "A drink for when you need to read a chat that's going by too fast and you want time to either slow down or stop entirely.", ingredients: "- Caffeine Pills\n- Ritalin\n- Modafinil\n- Creatine\n- Malic Acid\n- Tartaric Acid\n- Red 40   - Yellow 5   - Blue 1\n- Coconut Water\n- A sprinkling of cane sugar", flavor: "This beverage is banned in the EU as the smell alone would kill the typical Victorian child.", size: 90, xy: { x: 255, y: -60 } },

  { name: "Hoppy Root Beer Float", creator: "Hopper", image: "images/goobs/drink16.png", description: "A root beer float so good it’ll make you hop all over the place", ingredients: "- Root Beer\n- Vanilla Ice Cream\n- Cinnamon", flavor: "Hopefully the ice cream at the bottom is evident enough and not confusing", size: 90, xy: { x: 330, y: -40 } },

  { name: "Badtcha Frappe", creator: "Riatsila", image: "images/goobs/drink27.png", description: "Earthy matcha flavors, not super sweet, just enough to take off the bitterness...but an aftertaste of \"how old is this?\"", ingredients: "- Out of date matcha powder\n- Ice\n- Blending base (only added sweetness)\n- Oat milk\n- Whipped cream.", flavor: "Fairly normal ingredients, except the age of the matcha and the time between making to drinking. Mix and blend like normal, but freeze it to save for later, forget about it overnight, Let it mostly thaw out, and a lot of the matcha settles to the bottom. It's okay, but not too fresh.", size: 90, xy: { x: -210, y: -35 } },

  { name: "Apex Special", creator: "Goobert", image: "images/goobs/drink9.png", description: "The perfect cup for the perfect lap", ingredients: "- Finely Ground Coffee Beans\n- Coffee Oil\n- Whatever Falls In While\n  Under A Car", flavor: "This gooba is both track side mechanic and a professional driver. (he thinks he's both, despite not going to school... and his feet can't reach the pedals, but we like seeing him smile)", size: 90, xy: { x: -285, y: -20 } },

  { name: "Sans Fierté\n(Without Pride)", creator: "Ronan", image: "images/goobs/drink15.png", description: "Despite drinking this delicacy, it's still you.", ingredients: "- Determination\n- Depression\n- A lot of love", flavor: "Google \"Pikmin piss mug\", itll make more sense. And yes, Sans was intentionally included in the name.", size: 100, xy: { x: -90, y: -330 } },

  { name: "J-Goob Blueberry Soda", creator: "J-Goob (J-Rock)", image: "images/goobs/drink12.png", description: "Delicious & sweet blueberry soda", ingredients: "- Blueberry\n- Carbonated Water\n- Citric Acid\n- Lots of love\n  for the oshi", flavor: "Scrumptious delicious goobah flavor created by Mwocha Ch. モカ herself", size: 100, xy: { x: -225, y: -360 } },

  { name: "Magic Smoke", creator: "Natan", image: "images/goobs/drink6.png", description: "Put it back inside!", ingredients: "- Coffee\n- Tin\n- Copper\n- Sparks", flavor: "OSHA may not approve", size: 95, xy: { x: 45, y: -325 } },

  { name: "Loko Explosion", creator: "Skamperr", image: "images/goobs/drink5.png", description: "A chaotic and explosive mix that'll have you operating faster than a twin charged 6.2 V8", ingredients: "- 4loko (Fruit Punch)\n- Fireball\n- A lil bit of 5w-30", flavor: "Not sure if its safe to drink, but it gives you a major buff in every stat if you survive the initial sip", size: 90, xy: { x: -325, y: 225 } },

  { name: "HRGoob", creator: "WraxiusGaming", image: "images/goobs/drink4.png", description: "Somehow, it only has E or T if the drinker wants it.", ingredients: "- Estrogen\n- Testosterone\n- Syrup\n- Blue Curaçao\n- Strawberry\n- Egg", flavor: "Silly :3", size: 90, xy: { x: 295, y: -355 } },

  { name: "Sparkling Slushie Boys Gummy Magic Surprise", creator: "Blueboy74", image: "images/goobs/drink20.png", description: "A drink that will cheer you on to keep going no matter the situation. :mwochaCheer:", ingredients: "- Blue Raspberry\n- (Live) Gummy Worm\n- Mocha Love\n- 2 3AAA Battery Pen Lights", flavor: "Sometimes it's sour, sometimes its sweet. Brought to life with the magic of Mocha love. \"What a neat thing to happen to a nice guy like me\" :mwochaHeart:", size: 120, xy: { x: 230, y: -300 } },

  { name: "Repli-Cola", creator: "Kaiser", image: "images/goobs/drink3.png", description: "A bittersweet and energizing blend of blackberry cola for all your blade-running needs!", ingredients: "- Blackberry Cola\n- 3 Shots Espresso\n- Replicant Tears (to taste)", flavor: "You look lonely. I can fix that...with a devastatingly delicious beverage that'll leave you bleeding out in the snow feeling almost human!\n\n(Disclaimer: Kaiser not responsible for any baseline deviations)", size: 90, xy: { x: 320, y: -310 } },

  { name: "Frail-Tea", creator: "HumanFrailty", image: "images/goobs/drink2.png", description: "A milky neutral taste that satiates with subtle textures of cinnamon and vanilla, but little sugar.", ingredients: "- Black Tea\n- Milk\n- Vanilla\n- Cinnamon", flavor: "Not very complicated, but can be satisfactory at times.", size: 90, xy: { x: -320, y: -325 } },

  { name: "Fiend Liquor", creator: "Hatoyama", image: "images/goobs/drink1.png", description: "You will be cursed for drinking this straight.", ingredients: "- 2-3 Demons as fusion materials\n- Magatama\n- Oil\n- Everclear (Optional)", flavor: "For best results, fuse this 'drink' in a cathedral or other heretical location ideal for summoning and fusing demons. Try not to let yourself be possessed by a demon in the process. Also, magatama here is written as 禍魂 (malevolent spirit), instead of 勾玉 (curved jade).", size: 90, xy: { x: -200, y: -315 } },

  { name: "Uncle Goob's\nBackyard Brewski", creator: "Fuyu", image: "images/goobs/drink23.png", description: "", ingredients: "- Dark Ale\n- One Grill\n- The Cheapest Meats You Can\n  Find Legally", flavor: "The goob that you invite to the cookout", size: 90, xy: { x: 275, y: -15 } },

  { name: "Arctic Zero", creator: "Fassst", image: "images/goobs/drink8.png", description: "The chilliness invigorates you with limitless stamina and agility — though you will get hit with slow metabolism shortly after...", ingredients: "- Oreos\n- Vanilla Ice Cream\n- Milk\n- Hint Of speed\n- 1 cup Of bowling addiction\n- 100g of Protein\n- Yakult", flavor: "Best to drink before a sweaty bowling session. The melting effect on the left side of the goob is supposed to represent speed.", size: 100, xy: { x: 100, y: -305 } },

  { name: "Milkis", creator: "Rainy", image: "images/goobs/drink7.png", description: "Imagine Yakult but less sour and more sweet", ingredients: "- Water\n- Cream\n- Sugar\n- Umbrella\n- Milk", flavor: "Has like 5 cousins of different Milkis flavors, also hates eating for some reason", size: 100, xy: { x: -310, y: 295 } },

  { name: "Uncle's Lazy Chai", creator: "Baqi", image: "images/goobs/drink25.png", description: "Sweet and creamy black tea with a spicy kick. Born from pure laziness as the name suggests.", ingredients: "- Black tea bags\n- Water\n- Maple syrup\n- Red chili powder\n- Cayenne pepper flakes\n- Vanilla Ice Cream", flavor: "As your beautiful brains have probably already guessed, this is not the usual ingredient list you'd see for chai. The honest truth is that Uncle was just lazy and didn't want to pick up all those ingredients so he opted for some \"similar alternatives.\" His words. Does it actually taste good? Eh, it's alright. A little too heavy on the sweet for me, personally. Uncle likes it though so, it's on the menu.", size: 90, xy: { x: -45, y: -300 } },

  { name: "Instant Hangover Cure", creator: "washy", image: "images/goobs/drink28.png", description: "Ol' reliable", ingredients: "- Egg\n- Onion\n- Shrimp\n- Carrot\n- Corn\n- MSG\n- Red 40\n- Sodium\n- Sodium\n- Sodium\n- Sodium\n- Hot sauce if you're not a baby peanut", flavor: "Do NOT spill contents on the floor and walls", size: 90, xy: { x: -270, y: -305 } },

];

let beveragesClicked = Array(beveragesData.length).fill(false);
let currentMenuIndex = -1; // start page


// =====================================================
// PHASER CONFIG
// =====================================================

const config = {
  type: Phaser.WEBGL,
  width: 1920,
  height: 1080,
  backgroundColor: 0xffffff,
  parent: "phaser-container",
  scene: { preload, create },
  powerPreference: "high-performance",
  fps: {
    target: 30,
    smoothStep: true,
    forceSetTimeOut: true
  }
};

new Phaser.Game(config);


// =====================================================
// PRELOAD
// =====================================================

function preload() {
  this.load.image("bg-shelf", "images/bg-shelf.png");
  this.load.image("bg-dust", "images/bg-dust.png");
  this.load.image("bg-mocha", "images/bg-mocha.png");

  beveragesData.forEach((b, i) =>
    this.load.image("drink" + i, b.image)
  );

  this.load.image("book", "images/book.png");
  this.load.image("cup", "images/cup.png");
  this.load.image("arrow", "images/arrow.png");
  this.load.image("full", "images/HappyBdayMocha2026.png");

  this.load.image("help1", "images/help/help1.png");
  this.load.image("help2", "images/help/help2.png");
  this.load.image("help3", "images/help/help3.png");
}


// =====================================================
// CREATE
// =====================================================

function create() {

  const scene = this;
  const W = config.width;
  const H = config.height;

  const LEFT_WIDTH = W * 0.45;
  const RIGHT_WIDTH = W - LEFT_WIDTH;
  const CENTER_Y = H / 2;

  // -------------------------------------------------
  // LEFT SIDE (Background + Drink Sprites)
  // -------------------------------------------------

  const bgContainer = scene.add.container(LEFT_WIDTH / 2, CENTER_Y);

  const shelf = scene.add.image(0, 0, "bg-shelf")
    .setOrigin(0.5)
    .setScale(H / scene.textures.get("bg-shelf").getSourceImage().height);

  bgContainer.add(shelf);

  const dust = scene.add.image(0, 0, "bg-dust")
    .setOrigin(0.5)
    .setScale(H / scene.textures.get("bg-dust").getSourceImage().height);

  bgContainer.add(dust);

  const drinkLayer = scene.add.container(0, 0);
  bgContainer.add(drinkLayer);

  const mocha = scene.add.image(0, 0, "bg-mocha")
    .setOrigin(0.5)
    .setScale(H / scene.textures.get("bg-mocha").getSourceImage().height);

  bgContainer.add(mocha);

  scene.drinkSprites = [];

  beveragesData.forEach((b, i) => {

    const sprite = scene.add.image(b.xy.x, b.xy.y, "drink" + i)
      .setInteractive({ useHandCursor: true, pixelPerfect: true });

    scaleTo(sprite, b.size || 100);

    sprite.on("pointerover", () => showHighlight(sprite));
    sprite.on("pointerout", () => clearHighlight(sprite));

    sprite.on("pointerdown", () => {
      beveragesClicked[i] = true;
      currentMenuIndex = i;
      refreshAll();
    });

    drinkLayer.add(sprite);
    scene.drinkSprites.push(sprite);
  });

  /*
  // -------------------------------------------------
  // GRID OVERLAY + NUMBERS + LIVE MOUSE COORDS
  // -------------------------------------------------

  const gridSize = 50;
  const numberSpacing = 100;

  const grid = scene.add.graphics();
  grid.lineStyle(1, 0x000000, 0.15);

  // Draw grid lines
  for (let x = -LEFT_WIDTH / 2; x <= LEFT_WIDTH / 2; x += gridSize) {
    grid.lineBetween(x, -H / 2, x, H / 2);
  }

  for (let y = -H / 2; y <= H / 2; y += gridSize) {
    grid.lineBetween(-LEFT_WIDTH / 2, y, LEFT_WIDTH / 2, y);
  }

  // Center axes
  grid.lineStyle(2, 0xff0000, 0.4);
  grid.lineBetween(0, -H / 2, 0, H / 2);

  grid.lineStyle(2, 0x0000ff, 0.4);
  grid.lineBetween(-LEFT_WIDTH / 2, 0, LEFT_WIDTH / 2, 0);

  bgContainer.add(grid);

  // -------------------------------------------------
  // GRID NUMBERS
  // -------------------------------------------------

  for (let x = -LEFT_WIDTH / 2; x <= LEFT_WIDTH / 2; x += numberSpacing) {
    const label = scene.add.text(x, 0, x.toString(), {
      fontSize: "12px",
      color: "#000",
    }).setOrigin(0.5);

    label.y = -H / 2 + 10;
    bgContainer.add(label);
  }

  for (let y = -H / 2; y <= H / 2; y += numberSpacing) {
    const label = scene.add.text(0, y, y.toString(), {
      fontSize: "12px",
      color: "#000",
    }).setOrigin(0.5);

    label.x = -LEFT_WIDTH / 2 + 20;
    bgContainer.add(label);
  }

  // -------------------------------------------------
  // LIVE MOUSE POSITION
  // -------------------------------------------------

  const mouseText = scene.add.text(10, 10, "X: 0  Y: 0", {
    fontSize: "16px",
    color: "#ffffff",
    backgroundColor: "#000000",
    padding: { x: 6, y: 4 }
  }).setDepth(9999).setScrollFactor(0);

  scene.input.on("pointermove", (pointer) => {
    // Convert screen coords to bgContainer local coords
    const localX = pointer.worldX - bgContainer.x;
    const localY = pointer.worldY - bgContainer.y;

    mouseText.setText(
      `X: ${Math.round(localX)}  Y: ${Math.round(localY)}`
    );
  });
*/

  // -------------------------------------------------
  // RIGHT SIDE (Book Menu)
  // -------------------------------------------------

  const menuX = LEFT_WIDTH + RIGHT_WIDTH / 2;
  const menu = scene.add.container(menuX, CENTER_Y);

  const PAGE_W = RIGHT_WIDTH * 0.42;
  const PAGE_H = H * 0.60;
  const OFFSET_Y = -60;

  const book = scene.add.image(-30, OFFSET_Y, "book")
    .setOrigin(0.5)
    .setDisplaySize(PAGE_W * 2.0 + 80, PAGE_H * 1.1);

  menu.add(book);

  const textStyle = {
    fontFamily: "Tahoma",
    color: "#424242"
  };

  const nameText = scene.add.text(-PAGE_W / 2 - 20, -PAGE_H / 2 + 70 + OFFSET_Y, "", { ...textStyle, fontSize: "40px", align: "center", wordWrap: { width: PAGE_W - 80 } }).setOrigin(0.5, 0.5);
  const creatorText = scene.add.text(-PAGE_W / 2 - 15, -PAGE_H / 2 + 125 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", fontStyle: "bold", wordWrap: { width: PAGE_W - 80 } }).setOrigin(0.5, 0);
  const beverageImage = scene.add.image(-PAGE_W / 2 - 15, 20 + OFFSET_Y, null);
  const flavorText = scene.add.text(-PAGE_W / 2 - 15, 210 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", wordWrap: { width: PAGE_W - 80 } }).setOrigin(0.5, 0);

  const ingredientsTitle = scene.add.text(-PAGE_W / 2 + 240, -PAGE_H / 2 + 60 + OFFSET_Y, "", { ...textStyle, fontSize: "32px" });
  const ingredientsText = scene.add.text(PAGE_W / 2 - 200, -PAGE_H / 2 + 110 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", wordWrap: { width: PAGE_W - 80 }, lineSpacing: 6 });
  const notesTitle = scene.add.text(-PAGE_W / 2 + 240, -PAGE_H / 2 + 280 + OFFSET_Y, "", { ...textStyle, fontSize: "32px" });
  const notesText = scene.add.text(PAGE_W / 2 - 200, -PAGE_H / 2 + 350 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", wordWrap: { width: PAGE_W - 80 }, lineSpacing: 6 });

  menu.add([
    nameText, creatorText, beverageImage, flavorText,
    ingredientsTitle, ingredientsText,
    notesTitle, notesText
  ]);


  // -------------------------------------------------
  // HELP PAGE LAYERS
  // -------------------------------------------------
  const helpStack = [];
  let helpDim = null;

  function showHelpPage(textureKey) {
    if (!helpDim) {
      helpDim = scene.add.rectangle(
        W / 2,
        H / 2,
        W,
        H,
        0x000000,
        0.5
      ).setDepth(900);
    }

    const blocker = scene.add.rectangle(
      W / 2,
      H / 2,
      W,
      H,
      0x000000,
      0
    )
      .setInteractive()
      .setDepth(2000);

    const worldMatrix = book.getWorldTransformMatrix(); // book position in world coords
    const helpImage = scene.add.image(
      worldMatrix.tx,
      worldMatrix.ty,
      textureKey
    )
      .setOrigin(book.originX, book.originY)
      .setDisplaySize(book.displayWidth, book.displayHeight)
      .setDepth(1100);

    const layer = { blocker, helpImage };
    helpStack.push(layer);

    blocker.on("pointerdown", () => {
      closeTopHelp();
    });
  }

  function closeTopHelp() {
    if (helpStack.length === 0) return;

    const topLayer = helpStack.pop();
    topLayer.blocker.destroy();
    topLayer.helpImage.destroy();

    if (helpStack.length === 0 && helpDim) {
      helpDim.destroy();
      helpDim = null;
    }
  }

  function openHelpSequence(pages) {
    pages.forEach(page => showHelpPage(page));
  }

  const reopenHelpBtn = scene.add.text(
    W - 60,
    50,
    "?",
    {
      fontSize: "36px",
      fontFamily: "Tahoma",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 5
    }
  )
    .setOrigin(0.5)
    .setDepth(500)
    .setInteractive({ useHandCursor: true });

  reopenHelpBtn.on("pointerdown", () => {
    openHelpSequence(["help1", "help2", "help3"]);
  });

  // -----------------------------
  // PAGE NAVIGATION
  // -----------------------------
  function createArrowButton(x, y, key, flipX = false, direction = 1) {
    const btn = scene.add.image(x, y, key)
      .setInteractive({ useHandCursor: true })
      .setOrigin(0.5);

    btn.setFlipX(flipX);

    const scale = 48 / Math.max(btn.width, btn.height);
    btn.setScale(scale);

    btn.on("pointerdown", () => {
      changePage(direction); // direction = -1 for left, +1 for right
    });

    return btn;
  }

  // Position them
  const prevBtn = createArrowButton(menuX - 440, H - 150, "arrow", true, -1);
  const nextBtn = createArrowButton(menuX + 380, H - 150, "arrow", false, 1);

  prevBtn.setDepth(800);
  nextBtn.setDepth(800);

  function changePage(direction) {
    if (beveragesData.length === 0) return;

    currentMenuIndex =
      (currentMenuIndex + direction + beveragesData.length) %
      beveragesData.length;

    updateMenu();
  }

  // -------------------------------------------------
  // QUICK MENU (Grid Thumbnails)
  // -------------------------------------------------

  const quickMenu = scene.add.container(W / 2 + 400, H - 180);

  const ICON_SIZE = 48;
  const ICON_PADDING = 12;
  const ICONS_PER_ROW = 12;

  beveragesData.forEach((b, i) => {

    const row = Math.floor(i / ICONS_PER_ROW);
    const col = i % ICONS_PER_ROW;

    const iconsInRow = Math.min(ICONS_PER_ROW, beveragesData.length - row * ICONS_PER_ROW);
    const rowStartX = -((iconsInRow - 1) * (ICON_SIZE + ICON_PADDING)) / 2;

    const x = rowStartX + col * (ICON_SIZE + ICON_PADDING);
    const y = row * (ICON_SIZE + ICON_PADDING);

    const thumb = scene.add.image(x, y, "drink" + i)
      .setInteractive({ useHandCursor: true });

    scaleTo(thumb, ICON_SIZE);

    thumb.setData("index", i);

    thumb.on("pointerdown", () => {
      currentMenuIndex = i;
      refreshAll();
    });

    quickMenu.add(thumb);
  });

  // -----------------------------
  // HIGHLIGHT UNDISCOVERED BUTTON
  // -----------------------------
  const highlightBtn = scene.add.text(
    W - 520,
    H - 1010,
    "Highlight Undiscovered",
    {
      fontSize: "18px",
      color: "#525252",
      fontFamily: "Tahoma"
    }
  ).setInteractive({ useHandCursor: true });

  highlightBtn.on("pointerdown", () => {
    scene.drinkSprites.forEach((sprite, i) => {
      if (!beveragesClicked[i]) {
        showHighlight(sprite, 0xe8bbae);

        setTimeout(() => {
          clearHighlight(sprite);
        }, 1500);
      }
    });
  });


  // -------------------------------------------------
  // DISCOVERY COUNTER
  // -------------------------------------------------

  const counterContainer = scene.add.container(W - 260, H - 1050);

  const discoveredText = scene.add.text(0, 0, "", { fontSize: "24px", fontFamily: "Tahoma", color: "#424242" }).setOrigin(0, 0.5);

  const cupIcon = scene.add.image(0, 0, "cup").setOrigin(0, 0.5);
  scaleTo(cupIcon, 32);

  counterContainer.add([discoveredText, cupIcon]);

  // -------------------------------------------------
  // UNLOCK BUTTON
  // -------------------------------------------------
  const unlockBtn = scene.add.container(W - 225, H - 1000);
  unlockBtn.locked = true;
  unlockBtn.setAlpha(0.35);

  const unlockBg = scene.add.graphics();
  unlockBg.fillStyle(0xcccccc, 1);
  unlockBg.lineStyle(2, 0x888888, 1);
  unlockBg.fillRoundedRect(-100, -24, 200, 48, 12);
  unlockBg.strokeRoundedRect(-100, -24, 200, 48, 12);

  const unlockText = scene.add.text(0, 0, "View Full Image", {
    fontSize: "20px",
    fontFamily: "Tahoma",
    color: "#424242"
  }).setOrigin(0.5);

  const unlockHit = scene.add.rectangle(0, 0, 200, 48, 0xffffff, 0)
    .setInteractive({ useHandCursor: true })
    .setOrigin(0.5);

  unlockHit.on("pointerdown", () => {
    if (!unlockBtn.locked) openPopup();
  });

  unlockBtn.add([unlockBg, unlockText, unlockHit]);

  // -------------------------------------------------
  // FULL IMAGE POPUP WITH DOWNLOAD BUTTONS
  // -------------------------------------------------

  const overlay = scene.add.rectangle(0, 0, W, H, 0x111111, 0.75)
    .setOrigin(0)
    .setDepth(1000)
    .setVisible(false)
    .setInteractive();

  const popup = scene.add.container(W / 2, H / 2)
    .setDepth(1001)
    .setVisible(false);

  const popupBg = scene.add.rectangle(0, 0, W * 0.5, H * 0.8, 0x473130)
    .setStrokeStyle(3, 0x75514a);

  const fullImage = scene.add.image(-170, 0, "full");
  scaleTo(fullImage, Math.min(W * 0.7, H * 0.7));

  const closeBtn = scene.add.text(popupBg.width / 2 - 40, -popupBg.height / 2 + 20, "X", {
    fontSize: "28px",
    fontFamily: "Tahoma",
    fontStyle: "bold",
    color: "#ffffff",
  }).setInteractive({ useHandCursor: true });

  popup.add([popupBg, fullImage, closeBtn]);
  closeBtn.on("pointerdown", closePopup);
  overlay.on("pointerdown", closePopup);

  // -------------------------------------------------
  // DOWNLOAD BUTTONS
  // -------------------------------------------------
const buttonY = 140;

const releaseBtn = scene.add.text(
  fullImage.x + 450,
  fullImage.y + buttonY,
  "Github link to\nall downloads",
  {
    fontSize: "24px",
    fontFamily: "Tahoma",
    fontStyle: "bold",
    color: "#ffffff",
    stroke: "#000000",
    strokeThickness: 3,
    backgroundColor: "#75514a",
    padding: { x: 16, y: 8 },
    align: "center"
  }
)
.setOrigin(0.5)
.setInteractive({ useHandCursor: true });

releaseBtn.on("pointerdown", () => {
  window.open(
    "https://github.com/Naglfar8/mocha-bday-2026/releases/tag/Files",
    "_blank",
    "noopener,noreferrer"
  );
});

popup.add(releaseBtn);

  const downloadsHBD = scene.add.text(fullImage.x + 450, fullImage.y - 180, "Happy Birthday\nMocha!", {
    fontFamily: "Tahoma",
    fontSize: "40px",
    fontStyle: "bold",
    color: "#ffffff",
    stroke: "#000000",
    strokeThickness: 2,
    align: "center",
    lineSpacing: 10
  }).setOrigin(0.5);
  popup.add(downloadsHBD);

  const downloadsHBD2 = scene.add.text(fullImage.x + 450, fullImage.y - 70, "From, the Goobahs", {
    fontFamily: "Tahoma",
    fontSize: "24px",
    fontStyle: "bold",
    color: "#c2c2c2",
    align: "center",
    lineSpacing: 10
  }).setOrigin(0.5);
  popup.add(downloadsHBD2);

  const downloadsTitle = scene.add.text(fullImage.x + 450, fullImage.y + 80, "Downloads!", {
    fontFamily: "Tahoma",
    fontSize: "30px",
    fontStyle: "bold",
    color: "#ffffff",
    stroke: "#000000",
    strokeThickness: 2,
    align: "center"
  }).setOrigin(0.5);
  popup.add(downloadsTitle);

  const downloadsFooter = scene.add.text(fullImage.x + 450, fullImage.y + 190, "or get them from Rimane", {
    fontFamily: "Tahoma",
    fontSize: "20px",
    fontStyle: "italic",
    color: "#ffffff",
    stroke: "#000000",
    strokeThickness: 1,
    align: "center"
  }).setOrigin(0.5);
  popup.add(downloadsFooter);


  // -------------------------------------------------
  // UPDATE FUNCTIONS
  // -------------------------------------------------

  function refreshAll() {
    updateMenu();
    updateQuickMenu();
    updateLeftSprites();
    updateCounter();
  }

  function updateMenu() {

    if (currentMenuIndex === -1) {
      nameText.setText("");
      creatorText.setText("");
      flavorText.setText("");
      ingredientsText.setText("\n\n\nBase art by: @/taekaze7");
      notesText.setText("");
      beverageImage.setTexture(null);
      beverageImage.setScale(0);
      return;
    }

    const discovered = beveragesClicked[currentMenuIndex];
    const data = beveragesData[currentMenuIndex];

    beverageImage.setTexture("drink" + currentMenuIndex);
    scaleTo(beverageImage, 350);

    if (discovered) {
      beverageImage.clearTint();
      nameText.setText(data.name);
      nameText.setFontSize(40);
      while (nameText.height > 80 && parseInt(nameText.style.fontSize) > 20) {
        nameText.setFontSize(parseInt(nameText.style.fontSize) - 2);
      }

      creatorText.setText("Creator: " + data.creator);
      creatorText.setFontSize(24);
      while (creatorText.height > 50 && parseInt(creatorText.style.fontSize) > 20) {
        creatorText.setFontSize(parseInt(creatorText.style.fontSize) - 2);
      }

      flavorText.setText(data.description);
      flavorText.setFontSize(24);
      while (flavorText.height > 100 && parseInt(flavorText.style.fontSize) > 18) {
        flavorText.setFontSize(parseInt(flavorText.style.fontSize) - 1);
      }

      ingredientsTitle.setText("Ingredients");
      ingredientsText.setText(data.ingredients);
      ingredientsText.setFontSize(24);
      while (ingredientsText.height > 150 && parseInt(ingredientsText.style.fontSize) > 18) {
        ingredientsText.setFontSize(parseInt(ingredientsText.style.fontSize) - 2);
      }

      notesTitle.y = ingredientsText.y + ingredientsText.height + 30;
      notesTitle.setText("Creator Notes");
      notesText.y = notesTitle.y + 60;
      notesText.setText(data.flavor);

      const notesBottomLimit = PAGE_H / 2 - 30 + OFFSET_Y;
      const availableNotesHeight = notesBottomLimit - notesText.y;

      notesText.setFontSize(24);
      while (notesText.height > availableNotesHeight && parseInt(notesText.style.fontSize) > 16) {
        notesText.setFontSize(parseInt(notesText.style.fontSize) - 1);
      }

    } else {
      beverageImage.setTint(0x000000);
      nameText.setText("???");
      creatorText.setText("Creator: ???");
      flavorText.setText("???");
      ingredientsText.setText("???");
      notesText.setText("???");
    }
  }

  function updateQuickMenu() {
    quickMenu.iterate(child => {
      const i = child.getData("index");
      beveragesClicked[i] ? child.clearTint().setAlpha(1)
        : child.setTint(0x000000).setAlpha(0.2);
    });
  }

  function updateLeftSprites() {
    scene.drinkSprites.forEach((sprite, i) => {
      beveragesClicked[i] ? sprite.clearTint().setAlpha(1)
        : sprite.setTint(0x000000).setAlpha(0.5);
    });
  }

  function updateCounter() {
    const discovered = beveragesClicked.filter(Boolean).length;

    discoveredText.setText(`${discovered} / ${beveragesData.length}`);
    cupIcon.x = discoveredText.width + 12;

    if (discovered === beveragesData.length && unlockBtn.locked) {
      unlockBtn.locked = false;
      unlockBtn.setAlpha(1);

      unlockBg.clear();
      unlockBg.fillStyle(0xa17167, 1);
      unlockBg.lineStyle(2, 0x000000, 1);
      unlockBg.fillRoundedRect(-100, -24, 200, 48, 12);
      unlockBg.strokeRoundedRect(-100, -24, 200, 48, 12);

      unlockText.setStyle({
        color: "#ffffff",
        fontStyle: "bold",
        stroke: "#000000",
        strokeThickness: 3
      });

      highlightBtn.setVisible(false);
      highlightBtn.disableInteractive();
    }
  }

  function openPopup() {
    overlay.setVisible(true);
    popup.setVisible(true);
  }

  function closePopup() {
    overlay.setVisible(false);
    popup.setVisible(false);
  }

  function showHighlight(sprite) {
    sprite.postFX.clear();
    sprite.postFX.addGlow(0xe8bbae, 4);
  }

  function clearHighlight(sprite) {
    sprite.postFX.clear();
  }

  function scaleTo(obj, maxSize) {
    const scale = maxSize / Math.max(obj.width, obj.height);
    obj.setScale(scale);
  }

  refreshAll();
  openHelpSequence(["help1", "help2", "help3"]);
}
