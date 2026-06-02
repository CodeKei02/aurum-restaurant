-- CreateTable
CREATE TABLE "LogModel" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL,
    "comensales" TEXT NOT NULL,
    "ocasion" TEXT NOT NULL,

    CONSTRAINT "LogModel_pkey" PRIMARY KEY ("id")
);
