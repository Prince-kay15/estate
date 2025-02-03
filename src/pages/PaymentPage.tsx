import React, { useState } from "react";
import { CreditCard, Lock, Building2, CheckCircle2, Mail } from "lucide-react";
export function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  return <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">
          Secure Payment
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 border-2 transition-colors
                ${paymentMethod === "card" ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 hover:border-gray-300"}`} onClick={() => setPaymentMethod("card")}>
              <CreditCard className="h-5 w-5" />
              <span>Credit Card</span>
            </button>
            <button className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 border-2 transition-colors
                ${paymentMethod === "bank" ? "border-blue-600 bg-blue-50 text-blue-600" : "border-gray-200 hover:border-gray-300"}`} onClick={() => setPaymentMethod("bank")}>
              <div className="h-5 w-5" />
              <span>Bank Transfer</span>
            </button>
          </div>
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Property Price</span>
              <span className="font-semibold">₦850,000,000</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Processing Fee</span>
              <span className="font-semibold">₦150,000</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="font-semibold">Total</span>
              <span className="font-semibold text-blue-600">₦850,150,000</span>
            </div>
          </div>
          {paymentMethod === "card" && <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Card Number</label>
                <div className="flex items-center border rounded-md">
                  <input type="text" placeholder="1234 5678 9012 3456" className="flex-grow px-4 py-2 focus:outline-none" />
                  <CreditCard className="h-5 w-5 text-gray-400 mr-4" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">CVV</label>
                  <input type="text" placeholder="123" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
                <Lock className="h-5 w-5 mr-2" />
                Pay Securely
              </button>
            </form>}
          {paymentMethod === "bank" && <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <Building2 className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Bank Transfer Instructions
                    </h3>
                    <p className="text-blue-800 text-sm">
                      Please transfer the total amount to the following bank
                      account. The property will be reserved for 24 hours
                      pending payment confirmation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-gray-600">Bank Name</span>
                  <span className="font-semibold">LuxuryEstates Bank</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-gray-600">Account Name</span>
                  <span className="font-semibold">
                    LuxuryEstates Properties LLC
                  </span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-gray-600">Account Number</span>
                  <span className="font-semibold">1234567890</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-gray-600">Routing Number</span>
                  <span className="font-semibold">087654321</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded-md">
                  <span className="text-gray-600">SWIFT Code</span>
                  <span className="font-semibold">LUXEUSNY</span>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="font-semibold mb-4">
                  After making the transfer:
                </h4>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Take a screenshot or photo of your transfer confirmation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>
                      Email the confirmation to payments@luxuryestates.com
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>We'll confirm receipt within 24 hours</span>
                  </li>
                </ol>
              </div>
              <button type="button" className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center" onClick={() => window.location.href = "mailto:payments@luxuryestates.com"}>
                <Mail className="h-5 w-5 mr-2" />
                Email Transfer Confirmation
              </button>
            </div>}
        </div>
      </div>
    </div>;
}