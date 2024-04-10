import {Validators} from "@angular/forms";
import {Patterns} from "./patterns";


export const RequiredValidation = [
    Validators.required,
]

export const PhoneNumberValidation = [
    Validators.pattern(Patterns.phoneNumber),
]

export const OnlyDigitalValidation = [
    Validators.pattern(Patterns.only_digits),
]

export const TypeValidation=[
    Validators.required,
    Validators.pattern(Patterns.amLetters_space)
]

export const PriceValidation = [
    Validators.required,
    Validators.pattern(Patterns.only_digits)
]

export const AddresValidation = [
    Validators.required,
    Validators.pattern(Patterns.amLetters_space)
]

export const DescreptionValidation =[
    Validators.maxLength(200)
]