const remoteImg = (seed) => `https://picsum.photos/seed/${seed}/600/400`

const pageContent = {
  brand: 'کالسکه‌چی',
  navLinks: [
    { label: 'دسته‌بندی کالا', href: '#categories' },
    { label: 'فروشگاه', href: '#store' },
    { label: 'درباره ما', href: '#about' },
    { label: 'بلاگ', href: '#blog' },
    { label: 'سبد خرید', href: '#cart' },
    { label: 'ورود', href: '#login' },
  ],
  hero: {
    slides: [
      {
        tag: 'کلکسیون زمستان',
        title: 'لباس کودک شاد و رنگی با ارسال سریع',
        subtitle: 'ست‌های هماهنگ، بافت و کاپشن‌های سبک، آماده برای روزهای سرد و پرهیجان بچه‌ها.',
        ctaPrimary: { label: 'مشاهده فروشگاه', href: '#store' },
        ctaSecondary: { label: 'حمل و نقل کودک', href: '#carriers' },
        accent: 'جدید',
        palette: ['#fef2f2', '#fee2e2'],
      },
      {
        tag: 'حراج مدرسه',
        title: 'لوازم‌التحریر ضدحوصله برای دانش‌آموزهای خلاق',
        subtitle: 'دفتر و مداد رنگی، جامدادی و کوله‌های سبک که خیال شما را از کیف مدرسه راحت می‌کند.',
        ctaPrimary: { label: 'لوازم‌التحریر', href: '#stationery' },
        ctaSecondary: { label: 'مشاهده بلاگ', href: '#blog' },
        accent: 'ویژه',
        palette: ['#eef2ff', '#e0e7ff'],
      },
      {
        tag: 'بخش بازی',
        title: 'اسباب‌بازی‌های ایمن و سرگرم‌کننده',
        subtitle: 'گزیده‌ای از پازل، لگو و بازی‌های گروهی که هم رشد می‌دهند و هم سرگرم می‌کنند.',
        ctaPrimary: { label: 'اسباب‌بازی', href: '#toys' },
        ctaSecondary: { label: 'تماس با ما', href: '#contact' },
        accent: 'محبوب',
        palette: ['#ecfdf3', '#dcfce7'],
      },
    ],
  },
  categories: [
    {
      id: 'stationery',
      title: 'لوازم‌التحریر',
      body: 'دفتر، مداد رنگی، ماژیک و جامدادی‌های مقاوم برای استفاده روزانه.',
      badge: 'مدرسه',
    },
    {
      id: 'carriers',
      title: 'حمل و نقل کودک',
      body: 'کالسکه سبک، کریر و آغوشی با استاندارد ایمنی بالا و طراحی ارگونومیک.',
      badge: 'ایمنی',
    },
    {
      id: 'kidswear',
      title: 'لباس کودک',
      body: 'تی‌شرت و شلوار راحتی، سرهمی و بافت‌های نرم در رنگ‌های متنوع.',
      badge: 'جدید',
    },
    {
      id: 'toys',
      title: 'اسباب‌بازی',
      body: 'پازل، لگو و بازی‌های فکری برای بالا بردن خلاقیت و تمرکز.',
      badge: 'محبوب',
    },
  ],
  products: [
    // لوازم‌التحریر
    {
      title: 'ست مداد رنگی ۲۴ تایی',
      category: 'لوازم‌التحریر',
      categoryId: 'stationery',
      price: '۲۳۰,۰۰۰ تومان',
      tag: 'هنری',
      image: remoteImg('stationery1'),
    },
    {
      title: 'دفتر خط‌دار ۱۰۰ برگ',
      category: 'لوازم‌التحریر',
      categoryId: 'stationery',
      price: '۶۵,۰۰۰ تومان',
      tag: 'روزمره',
      image: remoteImg('stationery2'),
    },
    {
      title: 'جامدادی پارچه‌ای ضدآب',
      category: 'لوازم‌التحریر',
      categoryId: 'stationery',
      price: '۱۸۵,۰۰۰ تومان',
      tag: 'جدید',
      image: remoteImg('stationery3'),
    },
    // حمل و نقل کودک
    {
      title: 'کالسکه سبک تاشو',
      category: 'حمل و نقل کودک',
      categoryId: 'carriers',
      price: '۲,۴۵۰,۰۰۰ تومان',
      tag: 'پرفروش',
      image: remoteImg('carriers1'),
    },
    {
      title: 'آغوشی ارگونومیک',
      category: 'حمل و نقل کودک',
      categoryId: 'carriers',
      price: '۱,۱۸۰,۰۰۰ تومان',
      tag: 'ایمنی',
      image: remoteImg('carriers2'),
    },
    {
      title: 'کریر ماشینی استاندارد',
      category: 'حمل و نقل کودک',
      categoryId: 'carriers',
      price: '۱,۹۸۰,۰۰۰ تومان',
      tag: 'استاندارد',
      image: remoteImg('carriers3'),
    },
    // لباس کودک
    {
      title: 'کاپشن پفی ضدآب',
      category: 'لباس کودک',
      categoryId: 'kidswear',
      price: '۸۹۰,۰۰۰ تومان',
      tag: 'زمستان',
      image: remoteImg('kidswear1'),
    },
    {
      title: 'ست سرهمی نخی',
      category: 'لباس کودک',
      categoryId: 'kidswear',
      price: '۴۳۰,۰۰۰ تومان',
      tag: 'راحتی',
      image: remoteImg('kidswear2'),
    },
    {
      title: 'بافت یقه اسکی کودک',
      category: 'لباس کودک',
      categoryId: 'kidswear',
      price: '۵۲۰,۰۰۰ تومان',
      tag: 'زمستان',
      image: remoteImg('kidswear3'),
    },
    // اسباب‌بازی
    {
      title: 'لگو شهر رنگی',
      category: 'اسباب‌بازی',
      categoryId: 'toys',
      price: '۵۷۰,۰۰۰ تومان',
      tag: 'خلاقیت',
      image: remoteImg('toys1'),
    },
    {
      title: 'پازل ۱۰۰ تکه حیوانات',
      category: 'اسباب‌بازی',
      categoryId: 'toys',
      price: '۲۱۵,۰۰۰ تومان',
      tag: 'تمرکز',
      image: remoteImg('toys2'),
    },
    {
      title: 'بازی فکری گروهی',
      category: 'اسباب‌بازی',
      categoryId: 'toys',
      price: '۳۴۰,۰۰۰ تومان',
      tag: 'جمعی',
      image: remoteImg('toys3'),
    },
  ],
  about: {
    title: 'چرا کالسکه‌چی؟',
    body: 'ما محصولاتی انتخاب می‌کنیم که هم ایمن و استاندارد باشند و هم بچه‌ها عاشقشان شوند. از پشتیبانی خرید تا ارسال سریع، کنار شما هستیم.',
    bullets: ['تحویل سریع در تهران و مراکز استان', 'ضمانت سلامت و اصالت کالا', 'پشتیبانی دوستانه و پاسخ‌گو'],
  },
  blog: {
    title: 'از بلاگ',
    posts: [
      { title: 'چطور کوله مناسب مدرسه انتخاب کنیم؟', date: '۱۴۰۳/۰۹/۲۰', excerpt: 'وزن مناسب، ارگونومی بندها و فضا برای بطری آب؛ همه چیز درباره یک انتخاب سالم.' },
      { title: 'راهنمای خرید کالسکه سفر', date: '۱۴۰۳/۰۹/۱۵', excerpt: 'کالسکه سبک، جمع‌وجور و ایمن برای پرواز و سفرهای شهری.' },
      { title: 'اسباب‌بازی بر اساس سن کودک', date: '۱۴۰۳/۰۹/۱۰', excerpt: 'چه بازی‌هایی تمرکز و خلاقیت را در سنین مختلف افزایش می‌دهند؟' },
    ],
  },
  footer: {
    contact: {
      phone: '۰۲۱-۵۵۵۵۴۴۰۰',
      email: 'hello@kaleskechi.ir',
      address: 'تهران، خیابان ولیعصر، کوچه کودک، پلاک ۷',
    },
    trust: {
      enamad: 'ای‌نماد (نماد اعتماد الکترونیکی)',
      supportHours: 'پشتیبانی همه روزه ۹ تا ۱۸',
    },
  },
}

export default pageContent
