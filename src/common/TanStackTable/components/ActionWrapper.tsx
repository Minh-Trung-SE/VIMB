"use client"
import { VariantProps, cva, cx } from "class-variance-authority";
import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";

const action = cva(
    "inline-block",
    {
        variants: {
            intent: {
                default: [
                    "bg-blue-100",
                    "text-blue-800",
                    "dark:bg-blue-900",
                    "dark:text-blue-300"
                ],
                dark: [
                    "bg-gray-100",
                    "text-gray-800",
                    "dark:bg-gray-900",
                    "dark:text-gray-300",
                ],
                red: [
                    "bg-red-100",
                    "text-red-800",
                    "dark:bg-red-900",
                    "dark:text-red-300"
                ],
                green: [
                    "bg-green-100",
                    "text-green-800",
                    "dark:bg-green-900",
                    "dark:text-green-300",
                ],
                yellow: [
                    "bg-yellow-100",
                    "text-yellow-800",
                    "dark:bg-yellow-900",
                    "dark:text-yellow-300",
                ],
                indigo: [
                    "bg-indigo-100",
                    "text-indigo-800",
                    "dark:bg-indigo-900",
                    "dark:text-indigo-300",
                ],
                purple: [
                    "bg-purple-100",
                    "text-purple-800",
                    "dark:bg-purple-900",
                    "dark:text-purple-300",
                ],
                pink: [
                    "bg-pink-100",
                    "text-pink-800",
                    "dark:bg-pink-900",
                    "dark:text-pink-300",
                ]
            }
        }
    }
)

type ActionProps = HTMLAttributes<HTMLButtonElement> & VariantProps<typeof action> & PropsWithChildren

const Badge = forwardRef<HTMLButtonElement, ActionProps>(
    ({ className, intent, children, ...props }, ref) => <span className={cx(className, action({ intent }))} ref={ref} {...props}>{children}</span>
)

Badge.displayName = "Badge"
export default Badge