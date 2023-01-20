import { inject, injectable } from "inversify";
import { types } from "@typegoose/typegoose";
import CreateOfferDto from "./dto/create-offer.dto";
import { OfferEntity } from "./offer.entity.js";
import { Component } from "../../types/component.types.js";

import type { LoggerInterface } from "../../common/logger/logger.interface";
import type { OfferServiceInterface } from "./offer-service.interface";

@injectable()
export default class OfferService implements OfferServiceInterface {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.OfferModel) private offerModel: types.ModelType<OfferEntity>
  ) { }

  async create(dto: CreateOfferDto) {
    const result = await this.offerModel.create(dto);
    this.logger.info('Offer created!');

    return result;
  }
  async findById(offerId: string) {
    return this.offerModel.findById(offerId).exec();
  }
}
