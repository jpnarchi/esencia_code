"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useClickOutside } from "@/hooks";
import { cn } from "@/lib";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RefObject, useRef, useState } from "react";
import AnimationContainer from "./global/animation-container";
import Icons from "./global/icons";
import Wrapper from "./global/wrapper";

const Navbar = () => {

    const ref = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState<boolean>(false);

    const mobileMenuRef = useClickOutside(() => {
        if (open) setOpen(false);
    });

    const { scrollY } = useScroll({
        target: ref as RefObject<HTMLDivElement>,
        offset: ["start start", "end start"],
    });

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <header className="fixed w-full top-0 inset-x-0 z-50">
            {/* Desktop */}
            <motion.div
                animate={{
                    width: visible ? "70%" : "100%",
                    y: visible ? 20 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 40,
                }}
                style={{
                    minWidth: visible ? "700px" : "1100px",
                }}
                className={cn(
                    "hidden lg:flex bg-transparent self-start items-center justify-between py-6 rounded-full relative z-[50] mx-auto w-full backdrop-blur gap-x-8",
                    visible && "bg-background/60 py-4 border border-t-foreground/20 border-b-foreground/10 border-x-foreground/15 w-full gap-x-10"
                )}
            >
                <Wrapper className="flex items-center justify-between lg:px-8 gap-x-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link href="/" className="flex items-center gap-2">
                            <Image src="/images/esencia-logo.png" alt="Esencia Logo" width={104} height={104} />
                        </Link>
                    </motion.div>

                    <div className="hidden lg:flex flex-row flex-1 absolute inset-0 items-center justify-center w-max mx-auto gap-x-2 text-sm text-muted-foreground font-medium">
                        <AnimatePresence>
                            {NAV_LINKS.map((link, index) => (
                                <AnimationContainer
                                    key={index}
                                    animation="fadeDown"
                                    delay={0.1 * index}
                                >
                                    <div className="relative">
                                        <Link href={link.link} className="hover:text-foreground transition-all duration-500 hover:bg-accent rounded-md px-4 py-2">
                                            {link.name}
                                        </Link>
                                    </div>
                                </AnimationContainer>
                            ))}
                        </AnimatePresence>
                    </div>

                    <AnimationContainer animation="fadeLeft" delay={0.1}>
                        <div className="flex items-center gap-x-4">
                            <Link href="https://wa.me/+525561365494">
                                <Button size="sm">
                                    Quiero agendar una videollamada
                                </Button>
                            </Link>
                        </div>
                    </AnimationContainer>
                </Wrapper>
            </motion.div>

            {/* Mobile */}
            <motion.div
                animate={{
                    y: visible ? 20 : 0,
                    borderTopLeftRadius: open ? "0.75rem" : "2rem",
                    borderTopRightRadius: open ? "0.75rem" : "2rem",
                    borderBottomLeftRadius: open ? "0" : "2rem",
                    borderBottomRightRadius: open ? "0" : "2rem",
                }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 50,
                }}
                className={cn(
                    "flex relative flex-col lg:hidden w-full justify-between items-center mx-auto py-4 z-50",
                    visible && "bg-neutral-950 w-11/12 border",
                    open && "border-transparent"
                )}
            >
                <Wrapper className="flex items-center justify-between lg:px-4">
                    <div className="flex items-center justify-between gap-x-4 w-full">
                        <AnimationContainer animation="fadeRight" delay={0.1}>
                            <Link href="/">
                                <Image src="/images/esencia-logo.png" alt="Esencia Logo" width={104} height={104} />
                            </Link>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeLeft" delay={0.1}>
                            <div className="flex items-center justify-center gap-x-4">
                                <Button size="sm">
                                    <Link href="https://wa.me/+525561365494" className="flex items-center">
                                        ¡Empieza hoy!
                                    </Link>
                                </Button>
                                {open ? (
                                    <XIcon
                                        className="text-black dark:text-white"
                                        onClick={() => setOpen(!open)}
                                    />
                                ) : (
                                    <MenuIcon
                                        className="text-black dark:text-white"
                                        onClick={() => setOpen(!open)}
                                    />
                                )}
                            </div>
                        </AnimationContainer>
                    </div>
                </Wrapper>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            ref={mobileMenuRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex rounded-b-xl absolute top-16 bg-neutral-950 inset-x-0 z-50 flex-col items-start justify-start gap-2 w-full px-4 py-8 shadow-xl shadow-neutral-950"
                        >
                            {NAV_LINKS.map((navItem: any, idx: number) => (
                                <AnimationContainer
                                    key={`link=${idx}`}
                                    animation="fadeRight"
                                    delay={0.1 * (idx + 1)}
                                    className="w-full"
                                >
                                    <Link
                                        href={navItem.link}
                                        onClick={() => setOpen(false)}
                                        className="relative text-neutral-300 hover:bg-neutral-800 w-full px-4 py-2 rounded-lg"
                                    >
                                        <motion.span>{navItem.name}</motion.span>
                                    </Link>
                                </AnimationContainer>
                            ))}
                            <AnimationContainer animation="fadeUp" delay={0.5} className="w-full">
                                <Link href="/signin" className="w-full">
                                    <Button
                                        onClick={() => setOpen(false)}
                                        variant="outline"
                                        className="block md:hidden w-full"
                                    >
                                        Sign In
                                    </Button>
                                </Link>
                            </AnimationContainer>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </header>
    );
};

export default Navbar;
