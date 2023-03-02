import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HouseDocument = House & Document;

@Schema()
export class House {
  @Prop({ required: true, unique: true })
  _id: string;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ type: String, ref: 'Brokers' })
  broker: string;

  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  neighbourhood: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  county: string;

  @Prop({ required: true })
  bedrooms: number;

  @Prop({ required: true })
  bathrooms: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  latitude: string;

  @Prop({ required: true })
  longitude: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [String] })
  types: string[];

  @Prop({ type: [String] })
  features: string[];

  @Prop({ type: [{ url: String, public_id: String }] })
  displayImages: { url: string; public_id: string }[];
}

export const HouseSchema = SchemaFactory.createForClass(House);
