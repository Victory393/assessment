export const stats = {
balanceAcrossStores: '₦50,000,000',
todaysTransactions: 200,
totalLocations: 78,
totalManagers: 78
};


export const chartData = [
{ month: 'Feb', high: 250, low: 180 },
{ month: 'Mar', high: 300, low: 200 },
{ month: 'Apr', high: 320, low: 210 },
{ month: 'May', high: 400, low: 260 },
{ month: 'Jun', high: 380, low: 270 },
{ month: 'Jul', high: 420, low: 300 },
{ month: 'Aug', high: 450, low: 320 },
{ month: 'Sep', high: 460, low: 340 },
{ month: 'Oct', high: 470, low: 350 },
{ month: 'Nov', high: 490, low: 360 },
{ month: 'Dec', high: 500, low: 380 },
{ month: 'Jan', high: 530, low: 400 }
];


//export const trendingLocations = [
//{ id: 1, name: 'Ikeja Mall', region: 'Lagos', manager: 'Tolu', openingBalance: '₦5,000,000', remaining: '₦1,200,000', amountMopped: '₦3,800,000', feeStatus: 'Active' },
//{ id: 2, name: 'Lekki Phase 1', region: 'Lagos', manager: 'Adebayo', openingBalance: '₦4,000,000', remaining: '₦900,000', amountMopped: '₦3,100,000', feeStatus: 'Active' },
//{ id: 3, name: 'Kano City', region: 'Kano', manager: 'Fatima', openingBalance: '₦3,500,000', remaining: '₦800,000', amountMopped: '₦2,700,000', feeStatus: 'Pending' }
//];



// trendingLocations.ts

export interface TrendingLocation {
  locationName: string;
  region: string;
  manager: string;
  openingBalance: string;
  remainingBalance: string;
  amountMopped: string;
  feeStatus: "Daily Fee" | "Weekend Fee";
}

export const trendingLocations: TrendingLocation[] = [
  {
    locationName: "Bokku - Lekki",
    region: "Bokku-Region 1",
    manager: "Adaeze Okoro",
    openingBalance: "₦5,500,000",
    remainingBalance: "₦50,000",
    amountMopped: "₦5,450,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Ikeja",
    region: "Bokku-Region 2",
    manager: "Emeka Nnadi",
    openingBalance: "₦2,150,000",
    remainingBalance: "₦15,000",
    amountMopped: "₦2,135,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Victoria Island",
    region: "Bokku-Region 3",
    manager: "Femi Adebayo",
    openingBalance: "₦8,900,000",
    remainingBalance: "₦100,000",
    amountMopped: "₦8,800,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Surulere",
    region: "Bokku-Region 4",
    manager: "Fatima Bello",
    openingBalance: "₦3,200,000",
    remainingBalance: "₦200,000",
    amountMopped: "₦3,000,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Yaba",
    region: "Bokku-Region 5",
    manager: "Ifeanyi Eze",
    openingBalance: "₦1,400,000",
    remainingBalance: "₦40,000",
    amountMopped: "₦1,360,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Magodo",
    region: "Bokku-Region 1",
    manager: "Zainab Musa",
    openingBalance: "₦6,750,000",
    remainingBalance: "₦75,000",
    amountMopped: "₦6,675,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Ikoyi",
    region: "Bokku-Region 2",
    manager: "Garba Sani",
    openingBalance: "₦950,000",
    remainingBalance: "₦5,000",
    amountMopped: "₦945,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Festac Town",
    region: "Bokku-Region 3",
    manager: "Nkechi Uche",
    openingBalance: "₦4,100,000",
    remainingBalance: "₦10,000",
    amountMopped: "₦4,090,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Alausa",
    region: "Bokku-Region 4",
    manager: "Abubakar Ali",
    openingBalance: "₦1,850,000",
    remainingBalance: "₦30,000",
    amountMopped: "₦1,820,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Maryland",
    region: "Bokku-Region 5",
    manager: "Chinedu Obi",
    openingBalance: "₦7,600,000",
    remainingBalance: "₦60,000",
    amountMopped: "₦7,540,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Apapa",
    region: "Bokku-Region 1",
    manager: "Toluwalope Ola",
    openingBalance: "₦5,000,000",
    remainingBalance: "₦25,000",
    amountMopped: "₦4,975,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Oshodi",
    region: "Bokku-Region 2",
    manager: "Aisha Yakubu",
    openingBalance: "₦1,120,000",
    remainingBalance: "₦2,000",
    amountMopped: "₦1,118,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Ajah",
    region: "Bokku-Region 3",
    manager: "Moses Gbenga",
    openingBalance: "₦3,800,000",
    remainingBalance: "₦150,000",
    amountMopped: "₦3,650,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Ebute Metta",
    region: "Bokku-Region 4",
    manager: "Patience Adamu",
    openingBalance: "₦2,900,000",
    remainingBalance: "₦90,000",
    amountMopped: "₦2,810,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Gbagada",
    region: "Bokku-Region 5",
    manager: "Deji Coker",
    openingBalance: "₦4,500,000",
    remainingBalance: "₦45,000",
    amountMopped: "₦4,455,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Badagry",
    region: "Bokku-Region 1",
    manager: "Halima Isa",
    openingBalance: "₦1,650,000",
    remainingBalance: "₦15,000",
    amountMopped: "₦1,635,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Epe",
    region: "Bokku-Region 2",
    manager: "Kunle James",
    openingBalance: "₦3,350,000",
    remainingBalance: "₦35,000",
    amountMopped: "₦3,315,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Ikorodu",
    region: "Bokku-Region 3",
    manager: "Gloria Efe",
    openingBalance: "₦7,100,000",
    remainingBalance: "₦110,000",
    amountMopped: "₦6,990,000",
    feeStatus: "Weekend Fee",
  },
  {
    locationName: "Bokku - Oworonshoki",
    region: "Bokku-Region 4",
    manager: "Yusuf Tanko",
    openingBalance: "₦2,450,000",
    remainingBalance: "₦12,000",
    amountMopped: "₦2,438,000",
    feeStatus: "Daily Fee",
  },
  {
    locationName: "Bokku - Lekki Phase 1",
    region: "Bokku-Region 5",
    manager: "Chioma David",
    openingBalance: "₦5,900,000",
    remainingBalance: "₦80,000",
    amountMopped: "₦5,820,000",
    feeStatus: "Weekend Fee",
  },
];
