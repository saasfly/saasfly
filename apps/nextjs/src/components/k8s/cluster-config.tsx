"use client";

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@saasfly/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@saasfly/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@saasfly/ui/form";
import * as Icons from "@saasfly/ui/icons";
import { Input } from "@saasfly/ui/input";
import { Label } from "@saasfly/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@saasfly/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@saasfly/ui/tabs";
import { toast } from "@saasfly/ui/use-toast";

import { trpc } from "~/trpc/client";
import type { Cluster } from "~/types/k8s";

interface ClusterProps {
  cluster: Pick<Cluster, "id" | "name" | "location">;
  params: {
    lang: string;
  };
}

const FormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(32, { message: "name must be at most 32 characters." }),
  location: z.enum(["China", "Hong Kong", "Singapore", "Tokyo", "US-West"]),
});
const isValidLocation = (
  location: string,
): location is "China" | "Hong Kong" | "Singapore" | "Tokyo" | "US-West" => {
  return ["China", "Hong Kong", "Singapore", "Tokyo", "US-West"].includes(
    location,
  );
};

export function ClusterConfig({ cluster, params: { lang } }: ClusterProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: {
      name: cluster.name, // default value
      location: isValidLocation(cluster.location)
        ? cluster.location
        : undefined,
    },
    resolver: zodResolver(FormSchema),
  });
  const router = useRouter();
  const [_isSaving, setIsSaving] = useState<boolean>(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSaving(true);
    const response = await trpc.k8s.updateCluster.mutate({
      id: cluster.id,
      name: data.name,
      location: data.location,
    });
    setIsSaving(false);
    if (!response?.success) {
      return toast({
        title: "Something went wrong.",
        description: "Your cluster config was not saved. Please try again.",
        variant: "destructive",
      });
    }

    router.push(`/${lang}/dashboard`);
    router.refresh();

    return toast({
      description: "Your cluster config has been saved.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Create cluster</CardTitle>
            <CardDescription>
              Deploy your new k8s cluster in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-2/3 space-y-6">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name of your cluster" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardContent className="w-2/3 space-y-6">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="location"
                  render={() => (
                    <FormItem>
                      <FormLabel>Region</FormLabel>
                      <FormControl>
                        <Controller
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <Select
                              onValueChange={(val: string) =>
                                field.onChange(val)
                              }
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a region" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Select Region</SelectLabel>
                                  <SelectItem value="China">China</SelectItem>
                                  <SelectItem value="Hong Kong">
                                    Hong Kong
                                  </SelectItem>
                                  <SelectItem value="Tokyo">Tokyo</SelectItem>
                                  <SelectItem value="Singapore">
                                    Singapore
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </CardContent>
          <CardContent className="w-3/4 space-y-6">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">MarketPlace</Label>
                <Tabs defaultValue="Architecture">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="Architecture">Architecture</TabsTrigger>
                    <TabsTrigger value="password">CI/CD</TabsTrigger>
                    <TabsTrigger value="Monitoring">Monitoring</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="Architecture"
                    className="grid grid-cols-4"
                  >
                    <Card className=" mb-4 mr-1">
                      <CardHeader>
                        <div className="flex ">
                          <svg className="h-8 w-12 " role="img">
                            <path d="m10.204 14.35.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349a2.691 2.691 0 0 0-.111-.088.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z" />
                          </svg>
                          <CardTitle>Kubernetes Dashboard</CardTitle>
                        </div>

                        <CardDescription>
                          UI for managing K8S clusters.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <Label htmlFor="version">Version</Label>
                          <Input id="version" defaultValue="v2.4.0" readOnly />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className=" mx-1 mb-4">
                      <CardHeader>
                        <div className="flex ">
                          <svg className="h-8 w-12 " role="img">
                            <path d="M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z" />
                          </svg>
                          <CardTitle>Istio Gateway</CardTitle>
                        </div>
                        <CardDescription>
                          Service Mesh for K8S clusters.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <Label htmlFor="version">Version</Label>
                          <Input id="version" defaultValue="v2.4.0" readOnly />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className=" mx-1 mb-4">
                      <CardHeader>
                        <div className="flex ">
                          <svg
                            className="h-8 w-12 "
                            viewBox="0 0 256.000000 256.000000"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <g
                              transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                              fill="#000000"
                              stroke="none"
                            >
                              <path d="M931 2509 c-68 -12 -133 -47 -217 -118 -124 -106 -181 -148 -276 -205 -186 -110 -225 -166 -279 -391 -16 -71 -52 -182 -78 -245 -68 -162 -75 -186 -75 -265 0 -79 7 -103 75 -265 26 -63 62 -173 78 -245 55 -229 92 -280 294 -402 60 -36 136 -88 169 -117 33 -28 83 -71 112 -94 28 -24 80 -58 116 -75 64 -31 67 -32 190 -28 158 5 320 5 480 0 119 -3 128 -2 184 24 33 15 89 52 125 82 36 30 92 76 123 103 32 26 104 75 160 109 195 116 235 170 289 398 16 72 52 182 78 245 67 160 74 185 74 265 0 80 -7 105 -74 265 -26 63 -62 174 -78 245 -54 225 -93 281 -278 391 -107 64 -151 96 -262 192 -145 125 -221 149 -414 130 -100 -9 -291 -6 -417 6 -25 3 -69 0 -99 -5z m558 -155 c502 -90 881 -550 881 -1069 0 -343 -163 -667 -439 -876 -207 -155 -496 -235 -756 -209 -561 57 -985 525 -985 1085 0 300 121 580 341 790 259 246 594 344 958 279z" />
                              <path d="M1091 2255 c-401 -91 -689 -373 -777 -760 -25 -110 -25 -311 0 -420 69 -301 264 -547 539 -680 151 -73 233 -90 427 -90 194 0 276 17 427 90 222 108 393 289 486 516 55 132 72 223 71 379 0 170 -24 271 -99 425 -126 259 -340 438 -620 521 -75 22 -114 27 -240 30 -107 3 -168 0 -214 -11z m104 -160 c0 -15 -8 -21 -32 -23 -18 -2 -33 -7 -33 -12 0 -5 15 -6 34 -3 24 4 35 1 39 -11 7 -17 -1 -24 -41 -36 -24 -7 -22 -8 16 -9 34 -1 42 -4 42 -20 0 -16 -10 -21 -52 -28 -29 -5 -56 -8 -60 -6 -9 4 -31 143 -24 150 7 8 76 21 96 19 8 -1 15 -10 15 -21z m275 1 c30 -13 40 -66 16 -85 -10 -9 -13 -22 -9 -42 5 -25 2 -29 -16 -29 -15 0 -25 9 -32 30 -12 34 -29 40 -29 11 0 -22 -21 -33 -39 -21 -12 7 -5 70 15 142 6 19 45 16 94 -6z m-547 -94 c21 -23 13 -32 -30 -32 -35 0 -42 -14 -23 -51 15 -27 39 -24 50 6 10 26 34 33 45 14 19 -29 -36 -89 -81 -89 -24 0 -74 59 -74 87 0 66 74 108 113 65z m810 -13 c52 -32 57 -54 13 -54 -21 1 -33 -9 -54 -42 -28 -45 -42 -52 -60 -30 -8 10 -4 24 18 57 27 40 28 46 14 61 -17 18 -12 39 9 39 7 0 34 -14 60 -31z m-385 -259 c70 -43 77 -138 16 -197 -19 -17 -34 -39 -34 -49 0 -15 8 -16 70 -11 66 6 71 4 86 -18 27 -41 -14 -87 -57 -65 -10 6 -37 10 -59 8 l-40 -2 0 -194 0 -195 52 7 c97 13 173 59 162 100 -4 16 8 33 45 70 56 55 58 54 80 -37 12 -49 8 -71 -12 -64 -6 2 -24 -16 -40 -39 -15 -24 -44 -57 -64 -75 -39 -33 -166 -99 -193 -99 -9 0 -27 -11 -40 -25 -30 -32 -50 -32 -80 0 -13 14 -28 25 -34 25 -21 0 -139 60 -176 90 -20 16 -54 54 -75 85 -21 30 -44 55 -51 55 -7 0 -15 4 -18 8 -9 15 30 127 45 130 21 4 105 -98 89 -108 -18 -11 15 -57 59 -80 28 -14 131 -40 158 -40 2 0 3 88 3 195 l0 195 -46 0 c-25 0 -54 -4 -64 -10 -42 -22 -82 25 -56 65 15 22 20 23 91 18 69 -5 75 -4 75 13 -1 10 -15 28 -32 39 -19 12 -38 36 -47 59 -41 109 85 208 187 146z m-363 -328 c51 -23 74 -27 153 -27 90 0 117 -8 66 -21 -53 -13 -167 3 -229 32 -51 24 -72 28 -140 28 -67 -1 -90 -6 -140 -30 -53 -25 -71 -28 -155 -29 -73 0 -103 4 -127 18 -48 26 -40 39 10 17 64 -29 171 -27 247 5 33 14 77 30 98 35 56 14 150 2 217 -28z m1156 11 c22 -8 39 -20 39 -25 0 -6 -8 -7 -17 -3 -101 43 -181 42 -298 -5 -72 -29 -86 -32 -160 -27 -59 3 -95 11 -137 31 -63 30 -81 57 -20 30 126 -55 203 -59 315 -15 40 16 84 31 97 34 39 8 139 -3 181 -20z m-1151 -149 c55 -24 78 -29 153 -29 111 0 111 -19 -1 -23 -72 -2 -91 1 -159 28 -108 43 -194 43 -292 1 -57 -25 -83 -31 -143 -31 -72 0 -162 21 -174 42 -12 19 5 19 65 -2 69 -23 140 -25 191 -6 19 8 60 23 90 35 78 30 181 25 270 -15z m578 6 c50 -21 68 -40 38 -40 -7 0 -34 9 -60 21 -35 15 -67 20 -126 20 -73 0 -99 9 -67 23 29 13 163 -1 215 -24z m580 5 c23 -9 42 -23 42 -31 0 -18 1 -18 -54 6 -72 32 -165 29 -261 -9 -57 -23 -92 -31 -140 -31 -35 0 -67 5 -70 10 -4 6 15 10 50 10 50 0 97 13 205 56 46 19 171 13 228 -11z m-1278 -155 c0 -17 -7 -20 -51 -20 -34 0 -77 -10 -127 -31 -63 -25 -91 -31 -153 -31 -82 0 -149 21 -149 46 0 19 -4 19 54 0 65 -22 176 -15 234 15 46 23 104 38 160 40 26 1 32 -3 32 -19z m625 11 c18 -4 31 -14 33 -25 3 -14 0 -17 -13 -12 -9 3 -52 6 -96 6 -62 0 -79 3 -79 14 0 21 90 31 155 17z m640 -15 c19 -8 35 -22 35 -30 0 -19 1 -19 -43 -1 -61 25 -164 19 -249 -14 -96 -38 -238 -48 -238 -16 0 12 15 15 75 15 60 0 89 6 138 27 34 14 78 30 97 34 47 11 142 3 185 -15z m-907 -53 c-3 -14 -14 -18 -53 -18 -28 1 -59 5 -70 10 -16 7 -6 11 45 15 36 4 69 7 73 8 5 1 7 -6 5 -15z m-525 -211 c-2 -38 0 -42 18 -37 25 8 59 -3 59 -20 0 -17 -93 -95 -113 -95 -21 0 -28 26 -11 41 14 11 14 13 0 21 -9 5 -16 16 -16 25 0 13 -3 13 -15 3 -18 -15 -45 -6 -45 14 0 19 91 96 110 93 11 -2 14 -14 13 -45z m1209 21 c10 -9 18 -22 18 -30 0 -7 9 -13 19 -13 26 0 36 -17 20 -36 -8 -10 -21 -13 -43 -8 -30 6 -31 6 -13 -13 21 -24 22 -42 2 -49 -13 -5 -125 72 -125 86 0 3 14 22 31 43 33 40 62 47 91 20z m-168 -139 c4 -9 -5 -25 -22 -40 l-27 -26 33 19 c29 16 34 16 42 3 7 -11 3 -21 -16 -37 -14 -13 -20 -23 -13 -23 7 0 21 8 31 17 17 15 20 15 34 1 14 -14 12 -18 -23 -45 -21 -16 -43 -33 -49 -36 -10 -6 -94 100 -94 117 0 7 80 66 90 66 5 0 11 -7 14 -16z m-834 -39 c10 -12 9 -29 -5 -85 -18 -74 -38 -90 -54 -46 -10 25 -33 38 -54 30 -13 -5 -44 22 -36 30 33 32 108 85 120 86 9 0 22 -7 29 -15z m167 -102 c16 -36 17 -37 22 -14 7 28 20 35 40 22 12 -8 11 -19 -4 -75 -10 -37 -22 -69 -26 -71 -15 -10 -37 7 -46 38 l-10 32 -11 -27 c-8 -20 -16 -25 -31 -21 -12 3 -21 8 -21 10 0 10 32 128 36 135 12 19 36 5 51 -29z m488 29 c15 -10 35 -60 35 -86 0 -42 -62 -76 -100 -56 -22 12 -50 66 -50 95 0 39 80 73 115 47z m-212 -100 c15 -37 27 -71 27 -75 0 -4 -11 -7 -25 -7 -14 0 -25 5 -25 10 0 16 -46 12 -60 -5 -15 -18 -40 -20 -40 -4 0 7 9 43 20 80 19 64 23 69 49 69 25 0 30 -7 54 -68z" />
                              <path d="M1415 2060 c-3 -6 1 -13 10 -16 19 -8 30 0 20 15 -8 14 -22 14 -30 1z" />
                              <path d="M1237 1662 c-35 -38 -8 -92 46 -92 27 0 57 32 57 61 0 43 -73 65 -103 31z" />
                              <path d="M1855 831 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z" />
                              <path d="M855 639 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z" />
                              <path d="M1504 576 c-7 -19 13 -56 31 -56 19 0 19 16 0 24 -22 8 -18 25 8 36 21 8 21 9 -6 9 -15 1 -30 -5 -33 -13z" />
                              <path d="M1295 510 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z" />
                            </g>
                          </svg>
                          {/*<svg className="h-8 w-12 " role="img" ><path d="M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z"/></svg>*/}
                          <CardTitle>Cert Manager</CardTitle>
                        </div>
                        <CardDescription>
                          k8s certificate management
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <Label htmlFor="version">Version</Label>
                          <Input id="version" defaultValue="v2.4.0" readOnly />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className=" mb-4 ml-1">
                      <CardHeader>
                        <div className="flex ">
                          <svg className="h-8 w-12 " viewBox="0 0 16 16">
                            <path
                              fill="#000000"
                              d="M0 0l7.971 15.516L16 0H0zm6.732 6.16h-1.27V4.89h1.27v1.27zm0-1.906h-1.27V2.985h1.27v1.269zm1.904 3.81h-1.27v-1.27h1.27v1.27zm0-1.905h-1.27V4.89h1.27v1.27zm0-1.905h-1.27V2.985h1.27v1.269zm1.894 1.905H9.26V4.89h1.27v1.27zM9.26 4.254V2.985h1.27v1.269H9.26z"
                            />
                          </svg>
                          <CardTitle> Vault</CardTitle>
                        </div>
                        <CardDescription>
                          protecting secrets and sensitive data.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <Label htmlFor="version">Version</Label>
                          <Input id="version" defaultValue="v2.4.0" readOnly />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className=" mb-4 mr-1 ">
                      <CardHeader>
                        <div className="flex items-start">
                          <svg className="h-8 w-12 " role="img">
                            <path d="m10.204 14.35.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349a2.691 2.691 0 0 0-.111-.088.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z" />
                          </svg>
                          <CardTitle>Minio </CardTitle>
                        </div>
                        <CardDescription>
                          S3 compatible object storage server.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div>
                          <Label htmlFor="version">Version</Label>
                          <Input id="version" defaultValue="v2.4.0" readOnly />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="invisible mx-1 mb-4" />
                    <Card className="invisible mx-1 mb-4" />
                    <Card className="invisible mb-4 ml-1" />
                  </TabsContent>
                  <TabsContent value="password">
                    <Card>
                      <CardHeader>
                        <CardTitle>Password</CardTitle>
                        <CardDescription>
                          Change your password here. After saving, you`&apos;`ll
                          be logged out.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="new">New password</Label>
                          <Input id="new" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </CardContent>
          <div className="w-2/3 space-y-6 p-6 pt-0">
            <Button type="submit" disabled={_isSaving}>
              {_isSaving && (
                <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Submit
            </Button>
          </div>
        </Card>
      </form>
    </Form>
  );
}
