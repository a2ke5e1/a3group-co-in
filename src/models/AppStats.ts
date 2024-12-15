import mongoose, { Document, Schema, Model } from "mongoose";

export interface IAppStats extends Document {
  appId: string;
  downloads: number;
  reviews: number;
  rating: number;
  lastUpdated: Date;
  createdAt: Date;
}

const AppStatsSchema: Schema = new Schema<IAppStats>(
  {
    appId: { type: String, required: true, unique: true },
    downloads: { type: Number, required: true },
    reviews: { type: Number, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: { createdAt: true, updatedAt: true }, // Track creation time only
  }
);

export const AppStats: Model<IAppStats> =
  mongoose.models.AppStats ||
  mongoose.model<IAppStats>("AppStats", AppStatsSchema);
