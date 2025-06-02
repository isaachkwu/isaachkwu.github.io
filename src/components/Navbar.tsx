import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "../utils/cn";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "# Works", href: "#works", current: true },
  { name: "# Skills", href: "#skills", current: false },
  { name: "# Contact", href: "#contact", current: false },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="mx-auto container px-4">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex shrink-0 items-center">
              <a href="#" className="hover:bg-gray-200 rounded-md p-2">
                <img
                  alt="Isaac Wu Logo"
                  src="/logo.svg"
                  className="h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      // item.current ? "underline" : "",
                      "rounded-md px-3 py-2 text-sm font-light text-black hover:bg-gray-200"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-200 hover:text-black">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel transition className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 ">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={cn(
                // item.current ? "underline" : "",
                "ml-3 block rounded-md px-3 py-2 text-base font-light text-gray-700 hover:bg-gray-200"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
