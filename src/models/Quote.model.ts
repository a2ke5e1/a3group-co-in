import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({ 
  schemaOptions: { 
    timestamps: true,
    collection: 'quotes' 
  }, 
  options: {
    customName: 'Quote',
  }
})
class Quote {
  @prop({ type: () => String, required: true })
  public fullName!: string;

  @prop({ type: () => String, required: true })
  public email!: string;

  @prop({ type: () => String, required: true })
  public projectType!: string;

  @prop({ type: () => String })
  public budget?: string;

  @prop({ type: () => String, required: true })
  public details!: string;

  @prop({ type: () => Boolean, required: true, default: false })
  public consent!: boolean;
}

export const QuoteModel =
  (mongoose.models?.Quote as ReturnType<typeof getModelForClass<typeof Quote>>) ||
  getModelForClass(Quote);

