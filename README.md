<img src='https://asset.brandfetch.io/idXhtbtxRO/idIJD0NBbS.jpeg' width=100px tittle='Tugas Binar'>
<a href="https://chalenge-6-binar.vercel.app/api/v1">Link Api Deploy </a>

<h1>Teknologi Yang digunakan</h1>
<div style="display":flex>
  - ExpressJs  
  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--YbV36HLj--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/hpg6if7btrwilqkidqbe.png" width='55px'>
</div>
<div style="display":flex>
  - PostgreSql   
  <img src="https://i.ibb.co/VLXdkXM/icons8-postgresql-48.png" width='15px'>
</div>
<div style="display":flex>
  - Vercel (Jika ingin Di deploy Secara gratis)   
  <img src="https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" width='15px'>
</div>
<h1>Cara Clone Project ini untuk di Local Kalian</h1>
- pertama clone menggunakan command ini
<pre>
  https://github.com/Yoga838/chalenge_6_Binar.git
</pre>
- setelah itu jika kalian menggunakan npm silahkan download semua package librari yang dibutuhkan 
<pre>
  npm i
</pre>
- edit database dengan posgresql database mu sendiri di .env contoh .env requirement project ini 
<pre>
  # Set up Port 
  PORT = 5000
  # alamat Db jika menggunakan vercel
  POSTGRES_URL="...."
  POSTGRES_PRISMA_URL="...."
  POSTGRES_URL_NON_POOLING="...."
  POSTGRES_USER="...."
  POSTGRES_HOST="...."
  POSTGRES_PASSWORD="...."
  POSTGRES_DATABASE="...."
  
  
  #set up ImageKit untuk menyimpan foto secara cloud
  IMAGEKIT_PUBLIC_KEY = "...."
  IMAGEKIT_SECRET_KEY = "...."
  IMAGEKIT_URL_ENDPOINT = "...."
</pre>
- setelah itu lakukan migrate database terlebih dahulu menggunakan command:
<pre>
  npx prisma migrate dev
</pre>
- program bisa di run dengan command
<pre>
  npm start
</pre>
- web berjalan pada url dan port sesuai dengan yang kita set up pada .env
<pre>
  https://localhost:3000
</pre>
