import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css"

// import pumpkinSpiceLatte from '../images/pumpkin-spice-latte.png';
// import goldenMilk from '../images/golden-milk.png';
// import chaiLatte from '../images/chai-latte.png';
// import hotChocolate from '../images/hot-chocolate.png';
// import peppermintMocha from '../images/peppermint-mocha.png';
// import matchaLatte from '../images/matcha-latte.png';

// rose image
import roseWhite from '../images/roses/white.png';
import rosePink from '../images/roses/pink.png';
import roseCream from '../images/roses/cream.png';
import roseRed from '../images/roses/red.png';
import roseYellow from '../images/roses/yellow.png';
import rosePurple from '../images/roses/purple.png';
import roseOldRose from '../images/roses/old-rose.png';
import roseBlue from '../images/roses/blue.png';
import roseOrange from '../images/roses/orange.png';
import roseBlack from '../images/roses/black.png';

// character image
import charWhite from '../images/characters/whiteSua.png';
import charPink from '../images/characters/pinkChermy.png';
import charCream from '../images/characters/creamKuriimu.png';
import charRed from '../images/characters/redMJGT.png';
import charYellow from '../images/characters/yellowKuriimu.png';
import charPurple from '../images/characters/purpleChermy.png';
import charOldRose from '../images/characters/oldRoseEnri.png';
import charBlue from '../images/characters/blueSua.png';
import charOrange from '../images/characters/orangeEnri.png';
import charBlack from '../images/characters/blackChermy.png';

const questions = [
  {
    question: "(1/10) คุณตื่นขึ้นมาในสวนกุหลาบกว้างใหญ่ กลิ่นหอมอบอวลและอากาศสดชื่นเข้ามากระทบผิวกาย สิ่งแรกที่คุณรู้สึกคืออะไร?",
    options: [
      { text: "สงบและอบอุ่น เหมือนอยู่ในบ้าน", drink: "ดอกกุหลาบสีขาว" },
      { text: "ตื่นเต้นและอยากสำรวจทันที", drink: "ดอกกุหลาบสีส้ม" },
      { text: "ระมัดระวังและตั้งคำถามว่าที่นี่คือที่ไหน", drink: "ดอกกุหลาบสีดำ" },
      { text: "โรแมนติก สนใจในความหมายที่ซ่อนอยู่", drink: "ดอกกุหลาบสีชมพู" },
      { text: "ทึ่งในความงามรอบตัว อยากสัมผัสทุกสิ่ง", drink: "ดอกกุหลาบสีม่วง" }
    ]
  },
  {
    question: "(2/10) สายลมพัดผ่านสวน เสียงกระซิบแผ่วเบาราวกับจะนำทางคุณ คุณคิดว่าสายลมกำลังบอกอะไรคุณ?",
    options: [
      { text: "ให้เดินตามสายลม จะนำทางฉันไปสู่บางสิ่ง", drink: "ดอกกุหลาบสีโอรส" },
      { text: "ให้ฉันระวัง เพราะทุกสิ่งมีเหตุผลของมัน", drink: "ดอกกุหลาบสีน้ำเงิน" },
      { text: "ให้ฉันเชื่อมั่นในตัวเองแล้วเลือกเส้นทางของตัวเอง", drink: "ดอกกุหลาบสีแดง" },
      { text: "ให้ตามหาคนอื่นที่อาจอยู่ที่นี่เช่นกัน", drink: "ดอกกุหลาบสีเหลือง" },
      { text: "ให้นิ่งหยุดฟัง เพราะบางทีคำตอบอาจอยู่ตรงนี้แล้ว", drink: "ดอกกุหลาบสีครีม" }
    ]
  },
  {
    question: "(3/10) คุณเดินมาถึงทางแยก มีป้ายบอกทางแต่ตัวหนังสือลบเลือนไปตามกาลเวลา คุณจะเลือกเส้นทางไหน?",
    options: [
      { text: "ทางที่เต็มไปด้วยแสงแดดอบอุ่น", drink: "ดอกกุหลาบสีเหลือง" },
      { text: "ทางที่มีลำธารใสไหลผ่าน", drink: "ดอกกุหลาบสีขาว" },
      { text: "ทางที่ปกคลุมด้วยหมอกจาง ดูลึกลับ", drink: "ดอกกุหลาบสีดำ" },
      { text: "ทางที่ทอดไปสู่ปราสาทเก่าแก่ไกลลิบ", drink: "ดอกกุหลาบสีน้ำเงิน" },
      { text: "ทางที่มีรั้วไม้เล็ก ๆ และเถากุหลาบเลื้อยพัน", drink: "ดอกกุหลาบสีชมพู" }
    ]
  },
  {
    question: "(4/10) ข้างหน้าคุณมีดอกกุหลาบสีหนึ่งที่โดดเด่นสะดุดตา แต่มีป้ายเขียนว่า “ห้ามแตะต้อง” คุณจะทำอย่างไร?",
    options: [
      { text: "มองดูอย่างชื่นชม เพราะความงามของมันก็เพียงพอแล้ว", drink: "ดอกกุหลาบสีครีม" },
      { text: "ตามหาผู้ดูแลสวนเพื่อขอคำตอบเกี่ยวกับมัน", drink: "ดอกกุหลาบสีน้ำเงิน" },
      { text: "ลองแตะเบา ๆ อย่างระมัดระวัง", drink: "ดอกกุหลาบสีม่วง" },
      { text: "เด็ดมามองใกล้ ๆ ทุกอย่างมีเหตุผลของมันล่ะน่า", drink: "ดอกกุหลาบสีแดง" },
      { text: "เดินผ่านไป เพราะบางสิ่งอาจไม่ใช่ของฉัน", drink: "ดอกกุหลาบสีโอรส" },
    ]
  },
  {
    question: "(5/10) หญิงชราผู้เฝ้าสวนเดินเข้ามาหาคุณ หล่อนถามว่า “กุหลาบที่คุณมองหาเป็นแบบไหน?” คุณจะตอบว่าอย่างไร?",
    options: [
      { text: "ทำให้คิดถึงคนสำคัญในครอบครัว", drink: "ดอกกุหลาบสีชมพู" },
      { text: "สง่างามและโดดเด่น ไม่เหมือนใคร", drink: "ดอกกุหลาบสีดำ" },
      { text: "เมื่อมองไปแล้วจะรู้สึกถึงกำลังใจ", drink: "ดอกกุหลาบสีเหลือง" },
      { text: "สวยงามราวฝัน ชวนให้หวนถึงอดีต", drink: "ดอกกุหลาบสีขาว" },
      { text: "เป็นราวกับพลังที่ทำให้อยากเดินหน้าต่อ", drink: "ดอกกุหลาบสีส้ม" }
    ]
  },
  {
    question: "(6/10) หญิงชราผู้เฝ้าสวนถามคุณว่า “สิ่งสำคัญที่สุดในชีวิตของเธอคืออะไร?”",
    options: [
      { text: "ความรักและความสัมพันธ์ที่มั่นคง", drink: "ดอกกุหลาบสีชมพู" },
      { text: "ความรู้และปัญญาที่ช่วยให้เข้าใจโลก", drink: "ดอกกุหลาบสีน้ำเงิน" },
      { text: "อิสระและการได้ใช้ชีวิตตามที่ต้องการ", drink: "ดอกกุหลาบสีส้ม" },
      { text: "พลังและความกล้าหาญในการเผชิญปัญหา", drink: "ดอกกุหลาบสีแดง" },
      { text: "ความสงบและความเรียบง่าย", drink: "ดอกกุหลาบสีขาว" }
    ]
  },
  {
    question: "(7/10) จู่ ๆ คุณได้ยินเสียงเพลงแผ่วเบา เพลงนี้ทำให้คุณรู้สึก..",
    options: [
      { text: "อบอุ่นและสบายใจ เหมือนถูกเยียวยา", drink: "ดอกกุหลาบสีครีม" },
      { text: "หวานและโรแมนติก เหมือนตกอยู่ในความรัก", drink: "ดอกกุหลาบสีชมพู" },
      { text: "ลึกลับและน่าค้นหา เหมือนความลับกำลังเปิดเผย", drink: "ดอกกุหลาบสีม่วง" },
      { text: "เร่าร้อนและเต็มไปด้วยพลัง", drink: "ดอกกุหลาบสีแดง" },
      { text: "เศร้าและคิดถึงใครบางคน", drink: "ดอกกุหลาบสีดำ" }
    ]
  },
  {
    question: "(8/10) คุณเดินไปจนพบม้านั่งไม้เก่า ๆ มีสมุดบันทึกเล่มหนึ่งเปิดอยู่ คำที่เขียนในนั้นคือ…?",
    options: [
      { text: "บรรทัดว่างรอให้คุณมาเติม", drink: "ดอกกุหลาบสีเหลือง" },
      { text: "ชีวิตยังคงสวยงาม", drink: "ดอกกุหลาบสีขาว" },
      { text: "ยิ้มก่อนอ่าน ตาหวานก่อนเปิด", drink: "ดอกกุหลาบสีชมพู" },
      { text: "กะแล้วว่าต้องอ่าน", drink: "ดอกกุหลาบสีดำ" },
      { text: "สูตรผัดไทยต้นตำรับ", drink: "ดอกกุหลาบสีส้ม" }
    ]
  },
  {
    question: "(9/10) พระอาทิตย์ลับขอบฟ้า คุณเห็นกุหลาบหนึ่งดอกเรืองแสงโดดเด่นกลางสวน สีของมันคือ…?",
    options: [
      { text: "สีทองเปล่งประกาย", drink: "ดอกกุหลาบสีโอรส" },
      { text: "สีม่วงลึกลับ", drink: "ดอกกุหลาบสีม่วง" },
      { text: "สีฟ้าสงบนิ่ง", drink: "ดอกกุหลาบสีน้ำเงิน" },
      { text: "สีแดงเร่าร้อน", drink: "ดอกกุหลาบสีแดง" },
      { text: "สีขาวบริสุทธิ์", drink: "ดอกกุหลาบสีขาว" }
    ]
  },
  {
    question: "(10/10) เมื่อเดินทางมาถึงสุดปลายทาง คุณพบประตูทางออก แต่มีข้อความเขียนไว้ว่า “คุณต้องมอบดอกกุหลาบให้ใครสักคนก่อนจึงจะออกไปได้” คุณจะมอบให้ใคร?",
    options: [
      { text: "คนที่ฉันรักมากที่สุด", drink: "ดอกกุหลาบสีชมพู" },
      { text: "คนที่ช่วยเหลือฉันระหว่างทาง", drink: "ดอกกุหลาบสีเหลือง" },
      { text: "คนที่ฉันอยากขอบคุณแต่ยังไม่มีโอกาส", drink: "ดอกกุหลาบสีครีม" },
      { text: "ตัวฉันเอง เพราะฉันสมควรได้รับมัน", drink: "ดอกกุหลาบสีแดง" },
      { text: "ไม่มีใครเลย ฉันจะเก็บมันไว้เป็นความทรงจำ", drink: "ดอกกุหลาบสีดำ" }
    ]
  },
];

const drinks = {
  "ดอกกุหลาบสีขาว": { 
    image: roseWhite, 
    compatible: "ดอกกุหลาบสีชมพู", 
    compatible_description: "คู่ของคุณเจ้าเสน่ห์ เป็นคนที่โดดเด่น แสดงออกซึ่งความรัก และต้องการความรักตอบกลับในเวลาเดียวกัน คลั่งรักนั่นล่ะ",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Chermy Ch. คุณอาจตกหลุมรักในรักที่หวานชื่น การเซอร์วิส ราวกับคุยโต้ตอบกับแฟนตัวจริงอยู่ก็ได้นะ",
    title: "กุหลาบสีขาว – บริสุทธิ์ อ่อนโยน สงบสุข",
    description: "คุณเป็นคนอ่อนโยน ใจดี และรักความสงบ มักเป็นที่พึ่งพาของคนรอบข้าง และเป็นผู้ฟังที่ดี",
    advantage: "จุดแข็ง: มีความซื่อสัตย์ น่าเชื่อถือ และอบอุ่น ทำให้คนรู้สึกปลอดภัย",
    disadvantage: "จุดอ่อน: อาจขาดความกล้าหาญเมื่อต้องตัดสินใจเรื่องสำคัญ และบางครั้งอาจตามใจคนอื่นมากเกินไป",
    character: charPink
  },
  "ดอกกุหลาบสีชมพู": { 
    image: rosePink, 
    compatible: "ดอกกุหลาบสีครีม", 
    compatible_description: "คู่ของคุณมีเสน่ห์จากความอ่อนโยน นุ่มนวล ราวกับจะทะนุถนอมคุณ คุณตกหลุมรักคนใจดี อยู่ด้วยแล้วอบอุ่นใจ ชอบที่จะมีอีกคนอยู่เคียงข้าง คุณเป็นคนติดแฟนนั่นแหละ",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Kuriimu Ch. คุณอาจตกหลุมรักเสน่ห์ของความอ่อนโยนของพี่สาวใจดีนะ",
    title: "กุหลาบสีชมพู – อ่อนโยน อบอุ่น และเปี่ยมเสน่ห์",
    description: "คุณเป็นคนอ่อนโยน มีเสน่ห์และเป็นที่รักของผู้คนรอบข้าง คุณชอบทั้งการเป็นผู้ให้และรับความรักในรูปแบบที่ละมุนละไม",
    advantage: "จุดแข็ง: มีความอ่อนไหวทางอารมณ์ที่ดี เข้าใจคนอื่น และชอบช่วยเหลือ",
    disadvantage: "จุดอ่อน: อาจอ่อนไหวจนเกินไป หรือรู้สึกเจ็บปวดง่ายเมื่อถูกละเลย",
    character: charCream
  },
  "ดอกกุหลาบสีครีม": { 
    image: roseCream, 
    compatible: "ดอกกุหลาบสีแดง", 
    compatible_description: "คู่ของคุณภายนอกอาจดูธรรมดาทั่วไป แต่เปี่ยมด้วยเสน่ห์แห่งความมุ่งมั่น คนที่ทำให้รู้สึกบันดาลใจและมีไฟฝัน พร้อมสร้างความมั่นคงไปด้วยกัน",
    compatible_description2: "มีบุคลิคคล้ายกับภาพรวมของสมาชิกกลุ่ม MJGT ความรักของคุณเหมือนกับนิยามของคนทั่วไป แค่มีอีกคนเคียงข้างก็รู้สึกอบอุ่นใจ",
    title: "กุหลาบสีครีม – สุขุม รอบคอบ และอบอุ่น",
    description: "คุณเป็นคนสุขุม ใจเย็น และให้ความสำคัญกับความสัมพันธ์ระยะยาว คุณชอบสร้างความมั่นคงให้กับชีวิตและคนรอบตัว",
    advantage: "จุดแข็ง: มีความเป็นผู้ใหญ่ รอบคอบ และสามารถเป็นที่ปรึกษาที่ดี",
    disadvantage: "จุดอ่อน: อาจลังเลใจเมื่อต้องเปลี่ยนแปลง และอ่อนไหวง่ายต่อความรู้สึกของผู้อื่น",
    character: charRed 
  },
  "ดอกกุหลาบสีแดง": { 
    image: roseRed, 
    compatible: "ดอกกุหลาบสีเหลือง", 
    compatible_description: "คุณตกหลุมรักความอบอุ่นเหมือนแสงแดดยามเช้า มุกตลกที่ชุบชูหัวใจ เสน่ห์จากความธรรมชาติที่อีกคนเป็น ชอบคนที่ทำให้รู้สึกวันวันนึงของคุณมีชีวิตชีวา",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Kuriimu Ch. คุณอาจตกหลุมรักมุกตลกมีม ๆ ของตัวแทนความสดใสนี้นะ",
    title: "กุหลาบสีแดง – ร้อนแรง มั่นใจ และทรงพลัง",
    description: "คุณเป็นคนมั่นใจในตัวเอง กล้าหาญ และรักความท้าทาย มีพลังดึงดูดและมักเป็นผู้นำในกลุ่ม",
    advantage: "จุดแข็ง: มีความมุ่งมั่น กล้าตัดสินใจ และไม่ยอมแพ้ง่าย ๆ",
    disadvantage: "จุดอ่อน: อาจดื้อรั้น หรือบางครั้งควบคุมอารมณ์ไม่ค่อยได้",
    character: charYellow 
  },
  "ดอกกุหลาบสีเหลือง": { 
    image: roseYellow, 
    compatible: "ดอกกุหลาบสีม่วง", 
    compatible_description: "คู่ของคุณไม่เหมือนใคร แต่กลับมีเสน่ห์ชวนหลงใหลในสายตาคุณ รู้ตัวอีกทีอาจทำให้ตกหลุมรัก แม้ดูแตกต่าง แต่มีความลงตัวและอะไรคล้ายกันที่คุณมองหา",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Chermy Ch. คอนเท้นต์ที่ไม่เหมือนใคร แต่สร้างรอยยิ้มแบบไม่รู้ตัว เรียกว่าดูทีต้องได้สักขำอะ",
    title: "กุหลาบสีเหลือง – สดใส มิตรภาพ และร่าเริง",
    description: "คุณเป็นคนสดใส ร่าเริง และเข้ากับคนง่าย มีพลังบวกและมักเป็นจุดศูนย์กลางของกลุ่มเพื่อน",
    advantage: "จุดแข็ง: สร้างบรรยากาศที่ดี เป็นมิตรและช่วยให้คนรอบข้างรู้สึกดี",
    disadvantage: "จุดอ่อน: อาจกลัวความผูกพันลึกซึ้ง และบางครั้งไม่ค่อยแสดงความรู้สึกแท้จริง",
    character: charPurple 
  },
  "ดอกกุหลาบสีม่วง": { 
    image: rosePurple, 
    compatible: "ดอกกุหลาบสีโอรส", 
    compatible_description: "คู่ของคุณมีเสน่ห์หวานซ่อนเปรี้ยว บุคลิคน่ารักที่ขัดแย้งกับความซน คือเสน่ห์ที่ไม่เหมือนใครในตัวคนที่คุณชอบ ตัวคุณเองก็ขี้แกล้งใช่เล่น",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Enri Ch. คุณอาจตกหลุมรักคนซน ๆ ที่มีเสน่ห์จากความสามารถจนน่าเอ็นดู",
    title: "กุหลาบสีม่วง – ลึกลับ มีเสน่ห์ และเฉลียวฉลา",
    description: "คุณเป็นคนที่มีเสน่ห์แบบลึกลับ มีความคิดลึกซึ้ง และมักจะเข้าใจในสิ่งที่คนอื่นมองไม่เห็น",
    advantage: "จุดแข็ง: มีความคิดสร้างสรรค์ ฉลาด และสามารถดึงดูดความสนใจจากผู้อื่น",
    disadvantage: "จุดอ่อน: อาจเข้าใจยาก และบางครั้งชอบเก็บตัวจนคนอื่นเข้าถึงไม่ง่าย",
    character: charOldRose 
  },
  "ดอกกุหลาบสีโอรส": { 
    image: roseOldRose, 
    compatible: "ดอกกุหลาบสีน้ำเงิน", 
    compatible_description: "คู่ของคุณมีเสน่ห์ที่สุขุม น่าเกรงขาม บุคลิกที่น่ารักแอบดุร้ายและมีหลายมุม เหมือนลูกแมวพยศที่น่าปราบให้เชื่อง",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Sua Ch. ความสงบเหมือนนั่งในคาเฟ่เงียบ ๆ กับเครื่องดื่มรสชาติดี และได้แลกเปลี่ยนความคิดซึ่งกันและกัน",
    title: "กุหลาบสีโอรส – อ่อนหวาน สง่างาม และโรแมนติก",
    description: "บุคลิกภาพ: คุณเป็นคนอ่อนหวาน มีเสน่ห์และชอบความโรแมนติก มีความอ่อนโยนในแบบที่ดึงดูดใจผู้อื่น",
    advantage: "จุดแข็ง: เข้าใจความรู้สึกของคนอื่นได้ดี และสามารถสร้างบรรยากาศที่อบอุ่น",
    disadvantage: "จุดอ่อน: อาจอ่อนไหวง่ายเกินไป และคาดหวังในความสัมพันธ์สูง",
    character: charBlue 
  },
  "ดอกกุหลาบสีน้ำเงิน": { 
    image: roseBlue, 
    compatible: "ดอกกุหลาบสีส้ม", 
    compatible_description: "คู่ของคุณมีเสน่ห์ที่สดใส เป็นรอยยิ้มประจำวัน มีความเป็นผู้นำ คนที่คุณรู้สึกอยากพักพิงและไว้วางใจได้",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Enri Ch. คุณอาจตกหลุมรักในความเก่งกาจ แต่ก็สดชื่น รวมถึงความเป็นกันเองที่จะขโมยหัวใจอย่างไม่ทันตั้งตัว",
    title: "กุหลาบสีน้ำเงิน – สุขุม น่าค้นหา และน่าเกรงขาม",
    description: "คุณเป็นคนสุขุม รอบคอบ และมีความลึกซึ้งในแบบของตัวเอง คุณชอบค้นหาความจริงและไม่เชื่อในสิ่งที่เห็นเพียงผิวเผิน",
    advantage: "จุดแข็ง: ฉลาด รอบคอบ และเป็นนักคิดที่ดี",
    disadvantage: "จุดอ่อน: อาจเคร่งเครียดเกินไป หรือบางครั้งเว้นระยะห่างจากคนอื่นมากเกินไป",
    character: charOrange 
  },
  "ดอกกุหลาบสีส้ม": { 
    image: roseOrange, 
    compatible: "ดอกกุหลาบสีดำ", 
    compatible_description: "คู่ของคุณต้องเปล่งประกาย โดดเด่น มีคนที่มีความน่าค้นหา เสน่ห์ต่างจากคนทั่วไป รักในความเสี่ยง ชอบผจญความตื่นเต้นไปด้วยกัน",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Chermy Ch. มีคอนเท้นต์แหวกขนบในช่องมากมายให้คุณยิ้มได้ในทุกวัน แปลกใหม่ มีเรื่องให้เซอร์ไพรส์ในทุกวัน",
    title: "กุหลาบสีส้ม – กระตือรือร้น มีพลัง และท้าทาย",
    description: "คุณเป็นคนกระตือรือร้น มีไฟในตัวและรักความท้าทาย ชอบความตื่นเต้นและไม่กลัวที่จะลองสิ่งใหม่ ๆ",
    advantage: "จุดแข็ง: มีพลังในการขับเคลื่อนตนเองและเป็นแรงบันดาลใจให้ผู้อื่น",
    disadvantage: "จุดอ่อน: อาจใจร้อน และบางครั้งไม่ค่อยระวังในคำพูดหรือการกระทำ",
    character: charBlack 
  },
  "ดอกกุหลาบสีดำ": { 
    image: roseBlack, 
    compatible: "ดอกกุหลาบสีขาว", 
    compatible_description: "คู่ของคุณมีเสน่ห์ที่เรียบง่าย ธรรมดาแสนพิเศษ เบาสบายเหมือนมองลูกแมวหลับ แต่ก็ทำให้คุณตกหลุมรักจนละสายตาไม่ได้",
    compatible_description2: "บุคลิคคล้ายกับวีทูปเบอร์ช่อง Sua Ch. คุณอาจตกหลุมรักเสน่ห์เนิบ ๆ ของเธอที่เข้ากับนิสัยของคุณแบบคาดไม่ถึง",
    title: "กุหลาบสีดำ – ลึกลับ แข็งแกร่ง และทรงอำนาจ",
    description: "คุณเป็นคนที่มีบุคลิกน่าค้นหา แข็งแกร่ง และมักมีเสน่ห์ที่แตกต่างจากคนทั่วไป คุณไม่กลัวความโดดเดี่ยวและมีพลังในตัวเอง",
    advantage: "จุดแข็ง: มีความเป็นอิสระสูง ไม่ยอมแพ้ต่อสิ่งใดง่าย ๆ",
    disadvantage: "จุดอ่อน: อาจปิดกั้นตัวเองจากคนอื่น และไม่ชอบให้ใครเข้ามาควบคุม",
    character: charWhite 
  }
};

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  function handleAnswer(drink) {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
  
      // Decrease the score for the previously selected drink
      if (selectedAnswer) {
        newScores[selectedAnswer] -= 1;
      }
  
      // Increase the score for the newly selected drink
      newScores[drink] = (newScores[drink] || 0) + 1;
  
      return newScores;
    });
  
    setSelectedAnswer(drink); // Mark the new answer as selected
  }
  

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let maxDrink = null;
    let maxScore = 0;

    for (const [drink, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxDrink = drink;
        maxScore = score;
      }
    }

    setResult(maxDrink);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
  }

  if (result) {
    const compatible = drinks[result].compatible;
    const character = drinks[result].character;
    return (
      <Result
        drink={result}
        compatible={compatible}
        compatible_description={drinks[result].compatible_description}
        compatible_description2={drinks[result].compatible_description2}
        title={drinks[result].title}
        description={drinks[result].description}
        advantage={drinks[result].advantage}
        disadvantage={drinks[result].disadvantage}
        drinkImage={drinks[result].image}
        compatibleImage={drinks[compatible].image}
        character={character}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container-with-next">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />

      <button className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        ถัดไป &gt;
      </button>
    </div>
);
}

export default Quiz;
