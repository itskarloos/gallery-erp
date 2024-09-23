import { Schema, Types, model, models } from "mongoose";

export interface IArtwork {
  _id: Types.ObjectId;
  artName: string;
  dimensions: string;
  material: string;
  imageUrl: string;
  isSold: boolean;
  artist: string;
  artistId: string;
  date: Date;
}

const ArtworkSchema = new Schema({
  artName: { type: String, required: true },
  dimensions: { type: String, required: true },
  material: { type: String, required: true },
  imageUrl: { type: String, required: true },
  isSold: { type: Boolean, required: true },
  date: { type: Date, required: true },
  artist: { type: String, required: true },
  artistId: { type: String, required: true },
});

const Artwork = models.Artwork || model<IArtwork>("Artwork", ArtworkSchema);

export default Artwork;
