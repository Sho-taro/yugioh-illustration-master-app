// note: 
// regularOrderIndex
//        ↓ changeValsOrderで各要素の配列内の要素の順番を入れ替える
// mixedOrderIndex       // imp: 今ココ
//        ↓ changeValsOrderで各要素の配列自体の順番を入れ替える
// moreMixedOrderIndex


// import { regularOrderIndex } from './regularOrderIndex';
// import { changeValsOrder } from './changeValsOrder';

// const mixedOrderIndex = [];

// regularOrderIndex.forEach((arr) => {
//   mixedOrderIndex.push(changeValsOrder(arr));
// })

// // console.log(mixedOrderIndex);
// export {mixedOrderIndex};

const mixedOrderIndex = [
  [2, 129, 225, 130, 99, 97, 224, 64, 66, 3, 131, 227, 192, 96, 128, 32, 195, 160, 1, 65, 226, 98, 35, 34, 163, 67, 193, 161, 162, 0, 33, 194],
  [4, 68, 103, 100, 229, 101, 5, 134, 228, 165, 38, 199, 230, 198, 39, 196, 102, 166, 197, 71, 6, 167, 70, 37, 164, 36, 69, 133, 231, 135, 7, 132],
  [203, 137, 42, 139, 72, 170, 75, 11, 8, 104, 232, 41, 138, 106, 40, 200, 202, 136, 169, 9, 105, 74, 107, 43, 233, 171, 235, 10, 201, 73, 168, 234],
  [44, 14, 45, 46, 175, 172, 205, 174, 207, 109, 239, 78, 110, 140, 143, 141, 142, 12, 77, 236, 206, 173, 13, 76, 108, 79, 237, 47, 204, 238, 15, 111],
  [81, 51, 209, 210, 113, 19, 241, 146, 243, 179, 208, 49, 80, 115, 242, 177, 144, 114, 17, 48, 83, 112, 145, 211, 16, 147, 176, 18, 178, 50, 82, 240],
  [246, 85, 183, 54, 151, 21, 212, 182, 22, 214, 180, 245, 117, 87, 247, 118, 116, 149, 84, 119, 52, 213, 53, 20, 181, 148, 150, 86, 215, 23, 244, 55],
  [248, 59, 249, 155, 187, 24, 56, 57, 154, 88, 26, 251, 250, 152, 219, 122, 186, 216, 91, 218, 120, 121, 184, 90, 123, 27, 58, 25, 153, 185, 89, 217],
  [29, 222, 189, 253, 254, 159, 94, 220, 255, 125, 188, 252, 127, 157, 60, 124, 28, 126, 191, 95, 30, 190, 31, 158, 221, 63, 223, 93, 92, 61, 62, 156],
  [449, 352, 257, 481, 289, 384, 321, 256, 385, 320, 417, 288, 353, 416, 480, 448],
  [453, 387, 293, 324, 322, 483, 418, 482, 323, 260, 291, 451, 354, 259, 356, 355, 292, 450, 261, 421, 325, 290, 419, 389, 485, 484, 420, 258, 452, 357, 388, 386],
  [455, 264, 262, 294, 489, 297, 422, 456, 296, 391, 328, 361, 423, 424, 487, 358, 359, 326, 265, 360, 454, 392, 425, 263, 295, 327, 457, 329, 488, 486, 393, 390],
  [362, 459, 267, 396, 493, 301, 397, 363, 428, 458, 332, 426, 461, 492, 427, 394, 331, 268, 330, 491, 365, 269, 490, 460, 364, 333, 298, 300, 395, 266, 429, 299],
  [495, 463, 336, 494, 270, 401, 430, 465, 272, 432, 400, 273, 462, 303, 368, 305, 496, 302, 366, 367, 337, 304, 399, 464, 335, 369, 431, 271, 398, 497, 433, 334],
  [341, 277, 498, 405, 403, 276, 274, 467, 307, 501, 437, 339, 402, 434, 275, 370, 340, 373, 435, 436, 306, 308, 466, 338, 309, 372, 404, 468, 371, 500, 499, 469],
  [375, 376, 409, 440, 439, 313, 343, 438, 278, 312, 407, 470, 471, 342, 310, 441, 344, 504, 374, 377, 472, 503, 505, 280, 279, 406, 281, 408, 473, 502, 345, 311],
  [283, 445, 346, 348, 285, 507, 477, 317, 381, 475, 378, 444, 347, 349, 410, 315, 442, 379, 506, 284, 411, 508, 474, 412, 413, 443, 316, 314, 476, 509, 380, 282],
  [286, 318, 319, 287, 350, 446, 351, 382, 415, 383, 478, 414, 447, 511, 479, 510],
  [673, 640, 513, 643, 736, 737, 579, 608, 544, 514, 578, 705, 576, 675, 642, 611, 739, 641, 609, 515, 672, 674, 707, 577, 738, 547, 546, 704, 610, 512, 545, 706],
  [516, 615, 549, 743, 614, 741, 581, 644, 645, 679, 678, 742, 580, 708, 551, 740, 646, 550, 647, 710, 709, 677, 582, 613, 612, 676, 583, 518, 548, 517, 519, 711],
  [586, 523, 715, 522, 682, 649, 744, 585, 651, 713, 650, 587, 552, 584, 683, 712, 681, 616, 520, 553, 714, 554, 617, 746, 648, 521, 745, 747, 680, 619, 555, 618],
  [559, 558, 557, 684, 718, 621, 751, 526, 655, 525, 686, 589, 653, 622, 591, 750, 620, 716, 654, 685, 748, 717, 623, 527, 687, 588, 749, 556, 652, 524, 719, 590],
  [721, 625, 690, 753, 754, 530, 528, 656, 563, 562, 658, 659, 593, 594, 627, 657, 720, 626, 688, 595, 560, 722, 691, 561, 723, 752, 689, 529, 531, 755, 592, 624],
  [757, 725, 662, 532, 758, 535, 630, 533, 628, 759, 660, 693, 629, 631, 564, 663, 596, 727, 726, 724, 567, 599, 661, 566, 565, 692, 756, 534, 694, 598, 597, 695],
  [602, 665, 696, 763, 730, 666, 538, 632, 729, 571, 536, 667, 760, 731, 635, 761, 537, 698, 569, 570, 699, 603, 601, 697, 634, 762, 633, 728, 664, 539, 600, 568],
  [702, 541, 764, 572, 668, 606, 636, 703, 540, 700, 573, 575, 671, 638, 604, 735, 733, 607, 701, 574, 732, 765, 543, 605, 639, 767, 734, 669, 542, 637, 766, 670],
  [769, 801, 897, 960, 928, 993, 865, 832, 768, 864, 992, 929, 896, 833, 800, 961],
  [772, 930, 932, 996, 997, 931, 963, 835, 900, 933, 964, 869, 773, 962, 837, 805, 803, 995, 771, 867, 804, 994, 899, 868, 770, 965, 834, 836, 802, 898, 866, 901],
  [873, 808, 871, 934, 969, 806, 936, 807, 902, 840, 999, 998, 1000, 904, 774, 775, 809, 937, 870, 839, 903, 967, 1001, 838, 777, 905, 968, 872, 776, 935, 966, 841],
  [939, 938, 908, 811, 813, 970, 1003, 875, 812, 906, 941, 781, 877, 842, 940, 810, 971, 1004, 1005, 845, 778, 780, 972, 1002, 973, 844, 843, 907, 779, 874, 876, 909],
  [942, 816, 943, 976, 881, 880, 815, 1008, 847, 974, 878, 977, 944, 817, 911, 782, 846, 913, 785, 1006, 912, 879, 848, 814, 784, 910, 849, 1007, 783, 945, 1009, 975],
  [787, 852, 818, 1010, 821, 916, 788, 789, 980, 882, 853, 978, 1011, 885, 820, 948, 883, 981, 949, 917, 1013, 914, 946, 915, 1012, 947, 850, 819, 884, 979, 786, 851],
  [920, 952, 793, 889, 792, 857, 825, 888, 1016, 791, 950, 951, 822, 953, 1017, 919, 1015, 824, 886, 921, 855, 887, 790, 985, 982, 1014, 984, 856, 983, 854, 918, 823],
  [955, 859, 986, 860, 891, 957, 893, 925, 1019, 861, 924, 890, 988, 826, 1020, 956, 892, 987, 827, 794, 797, 858, 1018, 829, 828, 922, 989, 923, 954, 1021, 795, 796],
  [959, 991, 863, 926, 990, 958, 894, 799, 895, 798, 830, 927, 862, 1022, 1023, 831],
  [1218, 1187, 1123, 1249, 1026, 1251, 1090, 1186, 1059, 1120, 1057, 1154, 1027, 1184, 1088, 1248, 1025, 1152, 1216, 1058, 1024, 1219, 1091, 1121, 1122, 1185, 1089, 1155, 1217, 1056, 1153, 1250],
  [1191, 1127, 1029, 1124, 1094, 1221, 1156, 1188, 1031, 1189, 1222, 1159, 1030, 1158, 1157, 1062, 1190, 1061, 1220, 1253, 1093, 1254, 1125, 1028, 1092, 1063, 1255, 1126, 1252, 1060, 1223, 1095],
  [1129, 1034, 1193, 1033, 1098, 1130, 1195, 1067, 1035, 1066, 1162, 1224, 1192, 1163, 1032, 1097, 1160, 1064, 1065, 1225, 1161, 1096, 1227, 1099, 1257, 1259, 1226, 1258, 1131, 1194, 1256, 1128],
  [1037, 1036, 1229, 1198, 1230, 1038, 1164, 1071, 1165, 1069, 1101, 1100, 1262, 1133, 1199, 1197, 1134, 1166, 1132, 1231, 1135, 1102, 1068, 1263, 1070, 1167, 1103, 1260, 1196, 1228, 1039, 1261],
  [1043, 1234, 1104, 1075, 1266, 1041, 1203, 1200, 1138, 1235, 1139, 1264, 1105, 1073, 1233, 1074, 1137, 1072, 1107, 1106, 1136, 1201, 1040, 1267, 1170, 1232, 1265, 1168, 1042, 1169, 1171, 1202],
  [1205, 1237, 1110, 1270, 1143, 1044, 1236, 1140, 1269, 1239, 1268, 1045, 1108, 1076, 1046, 1047, 1175, 1172, 1271, 1173, 1109, 1238, 1204, 1206, 1207, 1111, 1174, 1141, 1078, 1079, 1077, 1142],
  [1274, 1080, 1114, 1241, 1147, 1081, 1243, 1051, 1144, 1113, 1178, 1179, 1211, 1275, 1210, 1048, 1083, 1146, 1242, 1272, 1050, 1273, 1208, 1176, 1049, 1177, 1145, 1112, 1115, 1082, 1240, 1209],
  [1149, 1213, 1215, 1181, 1214, 1245, 1116, 1052, 1278, 1053, 1244, 1087, 1151, 1182, 1055, 1180, 1150, 1119, 1246, 1148, 1086, 1276, 1277, 1247, 1279, 1212, 1118, 1183, 1117, 1085, 1054, 1084],
  [1441, 1473, 1281, 1313, 1504, 1376, 1345, 1505, 1472, 1409, 1377, 1344, 1312, 1408, 1280, 1440],
  [1477, 1283, 1347, 1346, 1314, 1442, 1381, 1349, 1317, 1316, 1444, 1443, 1507, 1378, 1282, 1285, 1412, 1379, 1284, 1474, 1506, 1476, 1508, 1380, 1475, 1315, 1413, 1509, 1348, 1410, 1411, 1445],
  [1321, 1415, 1446, 1416, 1481, 1510, 1511, 1384, 1289, 1287, 1352, 1351, 1449, 1288, 1319, 1320, 1286, 1353, 1414, 1513, 1480, 1382, 1478, 1447, 1385, 1448, 1479, 1318, 1383, 1417, 1350, 1512],
  [1484, 1516, 1356, 1387, 1450, 1386, 1419, 1291, 1514, 1485, 1322, 1517, 1357, 1482, 1290, 1388, 1451, 1418, 1325, 1323, 1292, 1293, 1324, 1354, 1355, 1389, 1515, 1452, 1421, 1483, 1420, 1453],
  [1328, 1425, 1487, 1294, 1358, 1359, 1422, 1295, 1489, 1360, 1327, 1393, 1423, 1488, 1326, 1454, 1519, 1391, 1520, 1297, 1392, 1455, 1296, 1329, 1456, 1521, 1390, 1361, 1457, 1424, 1486, 1518],
  [1492, 1461, 1332, 1427, 1429, 1301, 1428, 1523, 1365, 1459, 1395, 1300, 1298, 1333, 1394, 1491, 1493, 1299, 1458, 1524, 1364, 1363, 1460, 1396, 1330, 1397, 1426, 1362, 1522, 1525, 1331, 1490],
  [1303, 1398, 1529, 1526, 1527, 1497, 1431, 1462, 1430, 1496, 1463, 1366, 1528, 1305, 1302, 1495, 1337, 1401, 1464, 1369, 1334, 1433, 1304, 1336, 1399, 1494, 1465, 1432, 1335, 1368, 1400, 1367],
  [1499, 1436, 1435, 1531, 1404, 1468, 1467, 1469, 1530, 1402, 1501, 1309, 1307, 1498, 1341, 1500, 1340, 1306, 1437, 1371, 1434, 1308, 1466, 1403, 1405, 1372, 1339, 1532, 1370, 1373, 1338, 1533],
  [1406, 1470, 1503, 1535, 1374, 1502, 1310, 1407, 1311, 1534, 1375, 1439, 1438, 1342, 1343, 1471],
  [1600, 1603, 1634, 1729, 1539, 1633, 1568, 1635, 1730, 1538, 1601, 1696, 1570, 1762, 1536, 1697, 1728, 1602, 1761, 1731, 1699, 1569, 1664, 1632, 1665, 1760, 1666, 1537, 1571, 1667, 1698, 1763],
  [1605, 1766, 1767, 1636, 1572, 1542, 1670, 1574, 1668, 1604, 1669, 1573, 1734, 1700, 1701, 1765, 1764, 1540, 1607, 1606, 1735, 1639, 1637, 1638, 1541, 1732, 1575, 1671, 1733, 1703, 1702, 1543],
  [1674, 1579, 1737, 1546, 1675, 1771, 1608, 1640, 1769, 1739, 1609, 1738, 1673, 1611, 1643, 1578, 1706, 1707, 1577, 1770, 1642, 1736, 1544, 1705, 1768, 1610, 1672, 1576, 1641, 1545, 1547, 1704],
  [1742, 1613, 1676, 1551, 1647, 1583, 1645, 1550, 1772, 1708, 1710, 1614, 1711, 1582, 1740, 1741, 1709, 1646, 1548, 1549, 1615, 1679, 1612, 1644, 1774, 1677, 1773, 1581, 1775, 1580, 1678, 1743],
  [1616, 1681, 1779, 1651, 1552, 1649, 1648, 1680, 1712, 1619, 1584, 1618, 1714, 1746, 1713, 1715, 1745, 1554, 1586, 1553, 1585, 1777, 1776, 1744, 1617, 1650, 1682, 1778, 1747, 1683, 1587, 1555],
  [1750, 1781, 1686, 1782, 1556, 1652, 1748, 1783, 1716, 1719, 1751, 1621, 1623, 1622, 1717, 1687, 1590, 1718, 1558, 1620, 1653, 1591, 1655, 1588, 1557, 1589, 1684, 1685, 1654, 1749, 1780, 1559],
  [1723, 1659, 1593, 1592, 1787, 1752, 1720, 1722, 1658, 1689, 1691, 1626, 1690, 1784, 1656, 1786, 1625, 1561, 1624, 1753, 1688, 1657, 1785, 1755, 1594, 1721, 1563, 1627, 1560, 1562, 1754, 1595],
  [1596, 1790, 1693, 1630, 1662, 1756, 1757, 1629, 1597, 1631, 1759, 1660, 1598, 1695, 1758, 1661, 1628, 1789, 1565, 1694, 1726, 1599, 1724, 1692, 1727, 1566, 1788, 1663, 1567, 1725, 1564, 1791],
  [1889, 2017, 1921, 1793, 2016, 1985, 1825, 1824, 1953, 1984, 1952, 1856, 1920, 1857, 1792, 1888],
  [1957, 1986, 1892, 1827, 1794, 1858, 1925, 2021, 1828, 1891, 1954, 1797, 1893, 1861, 1987, 1795, 1890, 1924, 1955, 1988, 2020, 1860, 1989, 1829, 1859, 1826, 2019, 1923, 2018, 1796, 1922, 1956],
  [2022, 1959, 1897, 1896, 1895, 1929, 1991, 1801, 1864, 1992, 1833, 1993, 2024, 1832, 2023, 1798, 1958, 2025, 1990, 1830, 1862, 1799, 1960, 1961, 1926, 1865, 1863, 1894, 1928, 1831, 1927, 1800],
  [1898, 1932, 1995, 1996, 1837, 1866, 1835, 1805, 1931, 1900, 1964, 1867, 1869, 1963, 1901, 2026, 1930, 1834, 1899, 1933, 2027, 1803, 1965, 1997, 1962, 1994, 2029, 1836, 1804, 1868, 1802, 2028],
  [1968, 1873, 1904, 1840, 2030, 1966, 1841, 1872, 1903, 2031, 1934, 1902, 1967, 2032, 1871, 1808, 1838, 1806, 1969, 2001, 1998, 1999, 1905, 1936, 1870, 1937, 1807, 1809, 1839, 2033, 2000, 1935],
  [2002, 1844, 2004, 2037, 1908, 2005, 2034, 2003, 2035, 1843, 1970, 1940, 1877, 1812, 2036, 1939, 1876, 1874, 1845, 1971, 1938, 1875, 1941, 1811, 1810, 1972, 1813, 1842, 1906, 1973, 1907, 1909],
  [1879, 1881, 1976, 2038, 2040, 1944, 1977, 1974, 1942, 1848, 2007, 2039, 1913, 2009, 1912, 1815, 1849, 1846, 1945, 1975, 1816, 1814, 1911, 2006, 1817, 1878, 1847, 2008, 1943, 2041, 1910, 1880],
  [2043, 1821, 1882, 1852, 1819, 1979, 1818, 2044, 1853, 2011, 1917, 1981, 1949, 2013, 2042, 1851, 2045, 1820, 1916, 1915, 1850, 1885, 2010, 1914, 1947, 1884, 1980, 2012, 1948, 1883, 1946, 1978],
  [1950, 2047, 2014, 1951, 1982, 1854, 1886, 1823, 1822, 1855, 1887, 1919, 1918, 2046, 1983, 2015],
];

export { mixedOrderIndex };