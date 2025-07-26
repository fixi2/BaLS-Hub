"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { forwardRef } from "react"

interface PaymentInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "cardNumber" | "expiry" | "cvc" | "zip" | "state"
}

export const PaymentInput = forwardRef<HTMLInputElement, PaymentInputProps>(
  ({ type, onChange, value, ...props }, ref) => {
    const formatCardNumber = (value: string) => {
      const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
      const matches = v.match(/\d{4,16}/g)
      const match = (matches && matches[0]) || ""
      const parts = []
      for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4))
      }
      if (parts.length) {
        return parts.join(" ")
      } else {
        return v
      }
    }

    const formatExpiry = (value: string) => {
      const v = value.replace(/\D/g, "")
      if (v.length >= 2) {
        return v.substring(0, 2) + "/" + v.substring(2, 4)
      }
      return v
    }

    const formatCVC = (value: string) => {
      return value.replace(/\D/g, "").substring(0, 3)
    }

    const formatZip = (value: string) => {
      return value.replace(/\D/g, "").substring(0, 5)
    }

    const formatState = (value: string) => {
      return value.replace(/[^a-zA-Z\s]/g, "")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let formattedValue = e.target.value

      switch (type) {
        case "cardNumber":
          formattedValue = formatCardNumber(e.target.value)
          if (formattedValue.replace(/\s/g, "").length > 16) return
          break
        case "expiry":
          formattedValue = formatExpiry(e.target.value)
          if (formattedValue.replace(/\D/g, "").length > 4) return
          break
        case "cvc":
          formattedValue = formatCVC(e.target.value)
          break
        case "zip":
          formattedValue = formatZip(e.target.value)
          break
        case "state":
          formattedValue = formatState(e.target.value)
          break
      }

      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: formattedValue,
        },
      }

      onChange?.(newEvent)
    }

    const getMaxLength = () => {
      switch (type) {
        case "cardNumber":
          return 19 // 16 digits + 3 spaces
        case "expiry":
          return 5 // MM/YY
        case "cvc":
          return 3
        case "zip":
          return 5
        default:
          return undefined
      }
    }

    const getPlaceholder = () => {
      switch (type) {
        case "cardNumber":
          return "1234 5678 9012 3456"
        case "expiry":
          return "MM/YY"
        case "cvc":
          return "123"
        case "zip":
          return "12345"
        case "state":
          return "State"
        default:
          return props.placeholder
      }
    }

    return (
      <Input
        {...props}
        ref={ref}
        value={value}
        onChange={handleChange}
        maxLength={getMaxLength()}
        placeholder={getPlaceholder()}
        className="bg-gray-800/50 border-gray-700 text-white"
      />
    )
  },
)

PaymentInput.displayName = "PaymentInput"
