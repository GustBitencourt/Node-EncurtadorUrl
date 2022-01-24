import { prop, Typegoose } from '@hasezoey/typegoose'

//como vai ser salva no banco
export class URL extends Typegoose {
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}

//model pra manipular os dados
export const URLModel = new URL().getModelForClass(URL)