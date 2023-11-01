-- CreateTable
CREATE TABLE "newsInfo" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,

    CONSTRAINT "newsInfo_pkey" PRIMARY KEY ("id")
);
