import React from "react";

/**
 * props:
 *   - ใช้เก็บจำนวนครั้งที่ผู้เล่นทายผิด
 *
 * ลำดับการเพิ่มชิ้นส่วน (ยิ่งผิดจะยิ่ง):
 * 0: เสาแขวน (เริ่มต้องจะแสดงแค่เสาแขวนอย่างเดียว)
 * 1: หัว
 * 2: ตัว
 * 3: แขนซ้าย
 * 4: แขนขวา
 * 5: ขายซ้าย
 * 6: ขายซ้าย (ครบชิ้นส่วน)
 */
export default function HangmanDrawing({ wrong = 0 }) {
  // จำกัดการกรอกคำผิดไม่เกิน 6
  const w = Math.max(0, Math.min(6, wrong));

  return (
    <svg
      viewBox="0 0 200 260"
      width="200"
      height="260"
      role="img"
      aria-label={`Hangman drawing: ${w} wrong`}
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* Gallows */}
      <line x1="20" y1="240" x2="180" y2="240" stroke="#333" strokeWidth="6" strokeLinecap="round" />
      <line x1="50" y1="30" x2="50" y2="240" stroke="#333" strokeWidth="6" strokeLinecap="round" />
      <line x1="50" y1="30" x2="140" y2="30" stroke="#333" strokeWidth="6" strokeLinecap="round" />
      <line x1="140" y1="30" x2="140" y2="55" stroke="#333" strokeWidth="6" strokeLinecap="round" />

      {/* เชือก*/}
      <line x1="140" y1="55" x2="140" y2="70" stroke="#555" strokeWidth="3" strokeLinecap="round" />

      {/* ส่วนหัว */}
      {w > 0 && (
        <circle
          cx="140"
          cy="90"
          r="20"
          stroke="#111"
          strokeWidth="3"
          fill="none"
        />
      )}

      {/* ส่วนตัว */}
      {w > 1 && (
        <line
          x1="140"
          y1="110"
          x2="140"
          y2="160"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {/* ส่วนแขนซ้าย*/}
      {w > 2 && (
        <line
          x1="140"
          y1="120"
          x2="115"
          y2="140"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {/* ส่วนแขนขวา*/}
      {w > 3 && (
        <line
          x1="140"
          y1="120"
          x2="165"
          y2="140"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {/* ส่วนขาซ้าย */}
      {w > 4 && (
        <line
          x1="140"
          y1="160"
          x2="120"
          y2="195"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {/* ส่วนขาขวา */}
      {w > 5 && (
        <line
          x1="140"
          y1="160"
          x2="160"
          y2="195"
          stroke="#111"
          strokeWidth="3"
          strokeLinecap="round"
        />
      )}

      {/* หน้าตาของตัวละคร*/}
      {w > 5 && (
        <>
          {/* ตา*/}
          <line x1="132" y1="85" x2="136" y2="89" stroke="#111" strokeWidth="2" />
          <line x1="144" y1="85" x2="148" y2="89" stroke="#111" strokeWidth="2" />
          {/* ปาก */}
          <line x1="133" y1="97" x2="147" y2="97" stroke="#111" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
