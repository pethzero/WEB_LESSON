const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ขนาดหน้าจอ
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ตัวแปรเกม
let player = { x: canvas.width / 2 - 50, y: canvas.height - 50, width: 100, height: 20 };
let fallingObjects = [];
let score = 0;
let isLife = 3;

// ฟังก์ชันสร้างของตก
function createFallingObject() {
    const size = Math.random() * 30 + 20; // ขนาดสุ่ม
    fallingObjects.push({
        x: Math.random() * (canvas.width - size),
        y: -size,
        width: size,
        height: size,
        speed: speed(),
    });
}

function speed() {
    let baseSpeed = 2; // ความเร็วพื้นฐาน
    let levelMultiplier = 1;

    // กำหนดระดับตามคะแนน
    if (score >= 0 && score <= 20) {
        levelMultiplier = 1; // Level 1
    } else if (score > 20 && score <= 50) {
        levelMultiplier = 1.5; // Level 2
    } else if (score > 50 && score <= 100) {
        levelMultiplier = 2; // Level 3
    } else if (score > 100 && score <= 200) {
        levelMultiplier = 2.5; // Level 4
    } else if (score > 200) {
        levelMultiplier = 3; // Level 5
    }

    return (baseSpeed + Math.random() * baseSpeed) * levelMultiplier;
}

// ฟังก์ชันตรวจสอบการชน
function isColliding(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

function updateGame() {
    if (isLife <= 0) {
        // แสดงข้อความ Game Over
        ctx.fillStyle = "black";
        ctx.font = "50px Arial";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);
        ctx.fillText(`Your Score: ${score}`, canvas.width / 2 - 180, canvas.height / 2 + 60);
        return; // หยุดการทำงานของเกม
    }

    // ล้างหน้าจอ
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // วาดผู้เล่น
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // วาดของตก
    ctx.fillStyle = "red";
    fallingObjects.forEach((obj, index) => {
        obj.y += obj.speed; // เคลื่อนที่ลง
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height);

        // ตรวจสอบชนผู้เล่น
        if (isColliding(obj, player)) {
            // คำนวณคะแนนตามขนาด
            if (obj.width < 25) {
                score += 10; // วัตถุขนาดเล็กได้ 10 คะแนน
            } else if (obj.width < 50) {
                score += 5; // วัตถุขนาดกลางได้ 5 คะแนน
            } else {
                score += 2; // วัตถุขนาดใหญ่ได้ 2 คะแนน
            }

            fallingObjects.splice(index, 1); // ลบออกจาก array
        }

        // หากตกลงล่างสุด
        if (obj.y > canvas.height) {
            fallingObjects.splice(index, 1);
            isLife -= 1; // ลดชีวิต
        }
    });

    // แสดงคะแนนและชีวิต
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 30);
    ctx.fillText(`Life: ${isLife}`, 100, 30);

    requestAnimationFrame(updateGame);
}

// ควบคุมการเคลื่อนที่ของผู้เล่น
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") player.x -= 50;
    if (e.key === "ArrowRight") player.x += 50;

    // จำกัดไม่ให้หลุดหน้าจอ
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
});

// เริ่มเกม
setInterval(createFallingObject, 2000); // สร้างของตกทุก 1 วินาที
updateGame();
