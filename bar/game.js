// =====================================================
// DATA
// =====================================================

const beveragesData = [
  { name: "1.5 goob", creator: "Goob!", image: "images/goobs/drink0.png", description: "Tasty drink", ingredients: "-wah", flavor: "a little sweet", xy: { x: 90, y: -300 } },
  { name: "2.0 goob", creator: "goob goob", image: "images/goobs/drink1.png", description: "a little bit of bitter and sweet", ingredients: "-goobism\n-coffee\n-( ・∇・)", flavor: "a goofy little guy", xy: { x: -20, y: -300 } },
  { name: "hai", creator: "car enjoyer", image: "images/goobs/drink2.png", description: "if i fits i sits", ingredients: "moga", flavor: "despite being coffee, will make you eepy", xy: { x: 250, y: -300 } }
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
  resolution: window.devicePixelRatio,
  scene: { preload, create },
  powerPreference: "high-performance",
  fps: {
    target: 30,
    smoothStep: true
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
  this.load.image("full", "images/HappyBirthdayMocha2026.png");

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

  const drinkLayer = scene.add.container(0, 0);
  bgContainer.add(drinkLayer);

  ["bg-dust", "bg-mocha"].forEach(key => {
    const img = scene.add.image(0, 0, key)
      .setOrigin(0.5)
      .setScale(H / scene.textures.get(key).getSourceImage().height);
    bgContainer.add(img);
  });

  scene.drinkSprites = [];

  beveragesData.forEach((b, i) => {

    const sprite = scene.add.image(b.xy.x, b.xy.y, "drink" + i)
      .setInteractive({ useHandCursor: true });

    scaleTo(sprite, 80);

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

  const nameText = scene.add.text(-PAGE_W / 2 - 15, -PAGE_H / 2 + 50 + OFFSET_Y, "", { ...textStyle, fontSize: "40px" }).setOrigin(0.5, 0);
  const creatorText = scene.add.text(-PAGE_W / 2 - 15, -PAGE_H / 2 + 120 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", fontStyle: "bold" }).setOrigin(0.5, 0);
  const beverageImage = scene.add.image(-PAGE_W / 2 - 15, 20 + OFFSET_Y, null);
  const descriptionText = scene.add.text(-PAGE_W / 2 - 15, 210 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", wordWrap: { width: PAGE_W - 80 } }).setOrigin(0.5, 0);

  const ingredientsTitle = scene.add.text(-PAGE_W / 2 + 240, -PAGE_H / 2 + 60 + OFFSET_Y, "", { ...textStyle, fontSize: "32px" });
  const ingredientsText = scene.add.text(PAGE_W / 2 - 200, -PAGE_H / 2 + 130 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", wordWrap: { width: PAGE_W - 80 }, lineSpacing: 12 });
  const flavorTitle = scene.add.text(-PAGE_W / 2 + 240, -PAGE_H / 2 + 280 + OFFSET_Y, "", { ...textStyle, fontSize: "32px" });
  const flavorText = scene.add.text(PAGE_W / 2 - 200, -PAGE_H / 2 + 350 + OFFSET_Y, "", { ...textStyle, fontSize: "24px", wordWrap: { width: PAGE_W - 80 } });

  menu.add([
    nameText, creatorText, beverageImage, descriptionText,
    ingredientsTitle, ingredientsText,
    flavorTitle, flavorText
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
  const prevBtn = createArrowButton(menuX - 420, H - 310, "arrow", true, -1);
  const nextBtn = createArrowButton(menuX + 380, H - 310, "arrow", false, 1);

  prevBtn.setDepth(800);
  nextBtn.setDepth(800);

  function createNavButton(x, y, label, direction) {
    const btn = scene.add.text(x, y, label, {
      fontSize: "20px",
      fontFamily: "Tahoma",
      color: "#66aaff"
    }).setInteractive({ useHandCursor: true });

    btn.on("pointerdown", () => {
      console.log("clicked", direction);

      changePage(direction);
    });

    return btn;
  }

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
  const files = [
    { label: ".png", file: "HappyBirthdayMocha2026.png" },
    { label: ".csp", file: "HappyBirthdayMocha2026.csp" },
    { label: ".psd", file: "HappyBirthdayMocha2026.psd" }
  ];

  const buttonSpacingX = 90;
  const buttonY = 140;

  const totalWidth = (files.length - 1) * buttonSpacingX;
  const startX = fullImage.x + fullImage.displayWidth / 2 - totalWidth / 2 + 190;

  files.forEach((f, i) => {
    const btn = scene.add.text(startX + i * buttonSpacingX, fullImage.y + buttonY, f.label, {
      fontSize: "24px",
      fontFamily: "Tahoma",
      fontStyle: "bold",
      color: "#ffffff",
      stroke: "#000000",
      strokeThickness: 3,
      backgroundColor: "#75514a",
      padding: { x: 12, y: 6 },
      align: "center"
    }).setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    btn.on("pointerdown", () => {
      const a = document.createElement("a");
      a.href = f.file;
      a.download = f.file;
      a.click();
    });

    popup.add(btn);
  });

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
      descriptionText.setText("");
      ingredientsText.setText("\n\n\nBase art by: @/taekaze7");
      flavorText.setText("");
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
      creatorText.setText("Creator: " + data.creator);
      descriptionText.setText(data.description);
      ingredientsTitle.setText("Ingredients");
      ingredientsText.setText(data.ingredients);
      flavorTitle.setText("Creator Notes");
      flavorText.setText(data.flavor);
    } else {
      beverageImage.setTint(0x000000);
      nameText.setText("???");
      creatorText.setText("Creator: ???");
      descriptionText.setText("???");
      ingredientsText.setText("???");
      flavorText.setText("???");
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
