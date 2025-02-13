-- DropIndex
DROP INDEX "Account_providerAccountId_key";

-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "id_token" TEXT,
ADD COLUMN     "scope" TEXT,
ADD COLUMN     "session_state" TEXT,
ADD COLUMN     "token_type" TEXT;
