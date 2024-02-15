import { Module } from "danet/mod.ts";
import { AuthLetheanController } from "./src/lethean.controller.ts";
import { AuthLetheanService } from "./src/lethean.service.ts";
import { OpenPGPService } from "../../Code/server/src/modules/cryptography/openpgp/openpgp.service.ts";
import { QuasiSaltService } from "../../Code/server/src/modules/cryptography/hash/quasi-salt.service.ts";

@Module({
  controllers: [AuthLetheanController],
  injectables: [ AuthLetheanService, OpenPGPService, QuasiSaltService]
})
export class AuthModule {}
