import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-col items-start gap-4 md:flex-row">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    to="/abrir-empresa"
                    className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Abrir empresa grátis
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Descubra o caminho para abrir sua empresa sem custos,
                      navegando pelo nosso site de recursos gratuitos.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem to="/certificado-digital" title="Certificado digital">
                Desvende o universo do certificado digital e suas vantagens para
                a sua empresa
              </ListItem>
              <ListItem to="/deixar-de-ser-mei" title="Deixar de ser MEI">
                Encontre orientações para fazer a transição e deixar de ser MEI.
              </ListItem>
              <ListItem to="/trocar-contador" title="Trocar de contador">
                Descubra o processo simplificado para trocar de contador
              </ListItem>
              <ListItem to="/" title="Contabilidade completa">
                Descubra tudo sobre contabilidade em nosso site: informações
                completas para uma gestão financeira eficiente.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/plans" className={navigationMenuTriggerStyle()}>
              Planos
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/como-funciona" className={navigationMenuTriggerStyle()}>
              Como funciona
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  title: string;
  children: React.ReactNode;
  to: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, to, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            to={to}
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
