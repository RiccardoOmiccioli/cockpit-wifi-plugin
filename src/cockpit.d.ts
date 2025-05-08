declare global {
    const cockpit: {
        spawn(
          command: string[] | string,
          options?: {
            superuser?: boolean;
            err?: string;
            environ?: string[];
            pty?: boolean;
            input?: string;
            directory?: string;
          }
        ): {
          stream: () => any;
          close: () => void;
          then: (resolve: (output: string) => void, reject?: (error: any) => void) => void;
          catch: (reject: (error: any) => void) => void;
        };
    
        file(
          path: string,
          options?: { superuser?: boolean }
        ): {
          read: () => Promise<string>;
          replace: (content: string) => Promise<void>;
          watch: () => void;
          exists: () => Promise<boolean>;
          chmod: (mode: string) => Promise<void>;
        };
    
        http(
          path: string,
          options?: {
            method?: string;
            superuser?: boolean;
            payload?: any;
            headers?: Record<string, string>;
            binary?: boolean;
          }
        ): Promise<any>;
    
        translate(msg: string): string;
    
        channel(
          options: {
            payload?: string;
            binary?: boolean;
            spawn?: string[];
            external?: string;
            internal?: string;
            args?: string[];
          }
        ): {
          stream: (callback: (data: string) => void) => void;
          close: () => void;
          control: (command: string, payload?: string) => void;
          onclose: (callback: () => void) => void;
        };
    
        logout(): void;
    
        script(
          script: string,
          options?: {
            superuser?: boolean;
            err?: string;
            environ?: string[];
            input?: string;
            directory?: string;
          }
        ): Promise<string>;
    };
}

export {};
