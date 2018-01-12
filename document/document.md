# تمرینات کلاس کامپایلر

## یادداشت ها

### مخشصات دانشجو

نام و نام خانوادگی:
__پویا محمد کاری__ 
&mdash;
شماره دانشجویی: 
__۹۳۰۲۲۸۶۱۵__
&mdash;
کلاس شنبه ها ساعت ۱:۳۰
&mdash;
دانشجوی سال ۹۶ ترم پاییز 
&mdash;
دانشگاه آزاد اسلامی واحد تهران مرکزی ساختمان هاشمی رفسنجانی طبقه دوم کلاس ۲۰۶



### تضمین دزدی نبودن بودن کار

- تمام تمرین هایی که با کد سرو کار دارند با زبان 
[KaryScript](https://github.com/pmkary/KaryScript)
نوشته شدند. تنها کسی که در حال حاضر این زبون رو استفاده می‌کنه منم.

- جاهایی که تحقیقات روی زبان ها بوده زبان هایی انتخاب شدند که یا هنوز از مرحله آلفا بیرون نیامدند، یا هیچ داکیومنتیشن فارسی ای ندارند برای همین احتمال کپی از کسی وجود ندارد.

- این داکیومنت و تمام کد ها و هر چیزی که بهش مربوط خواهند بود تماما در
[این مخزن](https://github.com/pmkary/university-compiler-course)
روی گیتهاب موجودن که مرحله به مرحله  با امضای من کامیت شد.

## یک) چند زبان برنامه نویسی را با هم مقایسه کنید

 - زبان 
[Eve](witheve.com). ایو یک زبان برنامه نویسی جدید است که هنوز در حال توسعه چهارمین آلفای خودش است. ایده ایو آوردن برنامه نویسی برای همگان است. 
بر اساس تحقیقات کریس جرینجر و بقیه تیم او روی برنامه نویسی چند چیز برای همگان در ابتدای تلاششان برای برنامه نویسی به شدت سخت است: یک) 
__آبجکت های نستد__
دو) 
__اسکوپ و برنچینگ ها__
سه)
__ترتیب اجرای دستورات__.
<br><br>
برای حل کردن این مشکل تیم ایو چند ده ورژن مختلف از یک پلتفرم بر اساس ایده 
__وارد کردن زمان (مثل برنامه نویسی FRP) به سیست های 
دیتسریبیوتد__
که حاصل تحقیقات 
[BOOM Lab](boom.cs.berkeley.edu)
ساختن که ایده ای بسایر هوشمندانست، در این سیستم به جای استفاده از تایپ های مختلف دیتا فقط عدد،‌ استرینگ و رکورد ها وجود دارن. تمام حافظه برنامه به صورت یک دیتابیس ریلیشنال طراحی شده و 
__تمام حافظه های جانبی و I/O برنامه هم با اینترفیسی مشابه دیتابیس های ریلیشنال به سیستم وصل هستند.__
به طور مثال داکیومنت مدل مرورگر به عنوان یک دیتابیس از تگ ها به سیستم معرفی می‌شود.
<br>تمام دستورات ایو کوئری هایی روی سیستم هستند. شما چیزی را سرچ می‌کنید، جوین و فیلتر انجام میدهید و به داده جدیدی مپ یا ریدوس میکنید.
<br><br>
این کورئری ها هیچ ترتیبی برای اجرا شدن  ندارن و برنامه نویس می‌تونه اون هارو با هر ترتیبی که دوست داره بنویسه. در نتیجه اگه بخوایم ایو رو با زبون های دیگه مقایسه بکنیم: تایپ نداره،‌ هیچ پارادیم برنامه نویسی قبل ای رو رعایت نمی‌کنه، مدل دیتاش رکوردیه، ترتیب نداره، نوشتن تابع در اون شدنی نیست (و فقط تعداد اندکی تابع رو ساپورت می‌کنه)، کامپایل میشه اما روی ویرچرال ماشین خودش کار می کنه و این ویرچرال ماشین بایت کدی نیست که بتونیم بگیم JIT Compiled سیستم.

- زبان 
[Dafny](https://github.com/Microsoft/dafny).
بعد از این که مایکروسافت نرم افزار هایی برای پروف مثل Coq رو درست کرد (Z3 و Boogy)، روی هسته پروف خودش یه زبان توسعه داد به اسم دفنی. دفنی زبونیه که به
NET.
کامپایل می‌شه و ساختاری شبیه به 
\#C
داره.این زبون همچون
\#C
تایپی سخت گیرانه داره ولی علاوه بر یک تایپ سیستم غنی و سخت گیرانه روی اون تایپ سیستم یک پروگرم وریفایر استفاده می‌کنه. علاوه بر تایپ شخصی که نرم افزار می‌نویسه توضیحی ریاضی برای توضیح دادن ورودی ها (دامین و نوع ورودی) و خروجی ها (رنج و رابطه اون ها نسبت به المنت های ورودی) رو توضیح می‌ده. بوگی و زد۳ برای هر تابع تعداد زیادی یونیت تست پروفینگ جنریت می‌کنن و باهاش تستینگ انجام می‌دن.

- زبان 
[QCL](http://tph.tuwien.ac.at/~oemer/qcl.html).
کیو‌سیئل یک زبان برنامه نویسی برای کامپیوتر های کوانتمی است.  کیوسیئل کاملا شبیه زبان سی طراحی شده با این فرق که در آن یک تایپ مخصوص برای Qubit  وجود دارد. برنامه نویس می‌تواند با آرایه ساختن از کیوبیت ها رجیستر بسازد و کتاب خانه استاندارد زبان ماتریس های معروف کوانتمی مثل هدامارد یا مثلا ترانهاده ها و X, Y و... را شامل می شود. همچنین تابع مخصوص مژر هم دارد و میتواند تا۳۰ کیوبیت را روی یک رم عادی ۸ گیگی شبیه سازی کند. کیوسیئل به خاطر نبود ماشین نهایی در حال حاضر روی یک ویرچرال ماشین روند را شبیه سازی می‌کند اما قابلیت کامپایل شدن به دستورات نهایی برای یک ماشین 
واقعی را هم دارد.

## دو)  چند خط اسمبلی بنویسید و اینتراپت بزنید

<img width="530" alt="screen shot 2018-01-13 at 12 27 23 am" src="https://user-images.githubusercontent.com/2157285/34894913-918980ee-f7f8-11e7-8d21-c0f320b16464.png">


## سه) چگونه با for می‌توان باقی لوپ هارا ساخت؟

![](https://user-images.githubusercontent.com/2157285/34886161-70ff1c1a-f7d7-11e7-8b35-8bd20f7723f9.png)

![](https://user-images.githubusercontent.com/2157285/34886165-72f777ec-f7d7-11e7-9918-999e0ecc9a02.png)

![](https://user-images.githubusercontent.com/2157285/34886166-73235bc8-f7d7-11e7-9b0b-2a37dbd79b34.png)

![](https://user-images.githubusercontent.com/2157285/34886167-73539cb6-f7d7-11e7-9896-d652fa7c7548.png)

## چهار)  در مورد Symbol Table تحقیق کنید

جدول سمبل ها استفاده می‌شود تا اطلاعات Identifier ها را نگهداری کند، چیزایی که این جدول نگه داری می‌کند اطلاعاتی مانند:

- اسم اصلی متغیر
- اسم یکتای متغیر داخل کامپایلر
- آدرس متغیر در صورت آدرسی بودن سیستم
- نوع متغیر
- نوع اسکوپ متغیر
- برنچ\اسکوپ تعریفی متغیر

جدول ها همیشه چند تا هستند. یک جدول اصلی در زمان لکس، پارس و کامپایل ابتدایی هست که __شامل اطلاعات تمام متغیر ها می‌شود__. جدول های دیگری هستند که حین پیمایش AST شکل می‌گیرند و در آن ها متغیر هایی که در __اسکوپ\برنچ در حال پردازش قابل دسترسی هستند__ لیست می‌شوند. (من یک پلیگراند ساده برای
[ارندل](https://fa.wikipedia.org/wiki/ارندل)
روی وب دارم که داخل آن می‌توانید جای کرسر رو تغییر بدین و متغیر های موجود در اون اسکوپ\برنچ رو مشاهده کنین، برای دیدنش
[اینجا رو کیلیک کنید](http://gerda.toys.kary.us/01/))

## پنج) برنامه T9 بنویسید

هسته برنامه

![](https://user-images.githubusercontent.com/2157285/34893376-2061b158-f7f2-11e7-8a5f-29897355ac89.png)

کد تستینگ آن

![](https://user-images.githubusercontent.com/2157285/34893377-208c3ef0-f7f2-11e7-84a2-99e2df070c54.png)

نتیجه ران کد:

![](https://user-images.githubusercontent.com/2157285/34893428-7007c1de-f7f2-11e7-9b3a-99ab0d6965b6.png)


من قبلها برای همان پلیگراند ارندل این کد رو استفاده کردم تا یک ساجسشن لیست درست کنم، در صورت تمایل می‌تونید 
[اینجار رو کیلیک کنید](http://gerda.toys.kary.us/02/)
و داخل ادیتور در اسکوپ های مختلف و جاهای مختلف با نوشتن اتساین و بعد هم استیتمنت سرچ ساجسش لیست رو باز کنین و همین کد رو امتحان کنین:

<img width="480" alt="screen shot 2018-01-12 at 11 47 13 pm" src="https://user-images.githubusercontent.com/2157285/34893603-2d765afa-f7f3-11e7-8915-38935f8bd6b3.png">

## شش) در مورد ویرچرال ماشین تحقیق کنید

دو نوع ویرچرال ماشین وجود دارد:

- ویرچرال ماشین های سیستمی کامل که برای __شبیه سازی کامل یک سیستم عامل__
استفاده می‌شوند. و از آن ها برای سند باکس کردن یک محیط، اجرای چند سیستم عامل همزمان روی یک ماشین یا هاست کردن چندین سیستم روی یک سرور و... استفاده می‌شود

- ویرچرال ماشین های پراسسی __که نسخه های سبکی از این ایده هستند که فقط برای اجرای یک برنامه استفاده می‌شوند.__  این سیستم ها با ساختن یک CPU مجازی برای برنامه این امکان رو به برنامه نویس (در اصل کامپایلر) می‌دن که بدون اهمیت دادن به سخت افزار یک سیستم نرم افزارشون رو کامپایل بکنن (برای اینستراکشن های این CPU مجازی) و یک برنامه واسط VM اون CPU را روی ماشین اصلی شبیه سازی بکند.

بعد از معرفی ایده Just In-Time Compilation بسیاری از این ویرچرال ماشین ها قابلیت های اپتیمایزیشن در لحظه (بیشتر برای زبان های داینامیک تایپ) رو پیدا کردن که باعث می‌شد  از کد نیتیو کامپایل شده بارها سریع تر باشن (ماشین V8 جاوا اسکریپت در حال حاضر کد هارو ۲ برابر روی VMش سریع تر اجرا می‌کنه تا وقتی که اون هارو نیتیو کامپایل کنه)

ایده اصلی وجود VM ها در اصل ولی برای تولید ساختار های عجیب در زبان بوده. زبان های داینامیکی به طور مثال همیشه به مفسری برای اجرا نیاز داشتند که به خاطر عدم سرعت مفسر های کامپایلری که دستورات را استیتمن به استیمنت کامپایل می‌کردند، این روز ها JIT ها جای خودشون رو به اون ها دادن و زبان های خاصی که از معماری سیستم پی‌روی نمی‌کنند رو با سرعت نسبتا بالا اجرا می‌کنند.

## هفت) برنامه ای بنویسید که یک رشته ی دلخواه را می‌گیرد و تعداد همه ی suffixها، prefixها،substringها، substringها و... رامی‌دهد و تمام زیررشته ها را در یک فایل ذخیره می‌کند

تمام زیر مجموعه ها (substring) ها

![](https://user-images.githubusercontent.com/2157285/34894110-5205bd1e-f7f5-11e7-868a-9b14e8c03685.png)

تمام prefix ها

![](https://user-images.githubusercontent.com/2157285/34894117-53fb1678-f7f5-11e7-8b0f-5906857c13ff.png)

تمام postfix ها

![](https://user-images.githubusercontent.com/2157285/34894118-5428abba-f7f5-11e7-9fde-ea739faf0fa5.png)

حاصل اجرای برنامه

![](https://user-images.githubusercontent.com/2157285/34894119-54529452-f7f5-11e7-9faa-19260b3e7adc.png)


## هشت) برای یک زبان مانند c تمام حق تقدم های operator ها را تحقیق و مطالعه کنید

برگرفته از 
[CPP Reference](http://en.cppreference.com/w/c/language/operator_precedence)

<img width="658" alt="screen shot 2018-01-13 at 12 12 39 am" src="https://user-images.githubusercontent.com/2157285/34894417-97206952-f7f6-11e7-9f6c-26886858aa1c.png">








